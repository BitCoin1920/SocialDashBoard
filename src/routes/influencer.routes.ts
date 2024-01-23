import puppeteer from 'puppeteer';
import { Request, Response, Router } from 'express';

const classesRoutes = Router();

classesRoutes.get("/:username", async (req: Request, res: Response) => {
  const { username } = req.params;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.instagram.com/${username}`);

    // Aqui você pode modificar a forma de obter os dados
    // Exemplo: Obter descrição do perfil
    const ogDescription = await page.$eval('meta[property="og:description"]', element => element.content);

    if (!ogDescription) {
      await browser.close();
      res.status(404).json({ error: "Dados do perfil estão indisponíveis." });
      return;
    }

    // Dividir e extrair informações da descrição
    const descriptionParts = ogDescription.split(" - ")[0].split(", ");
    const followers = descriptionParts[0].split(" ")[0];
    const following = descriptionParts[1].split(" ")[0];
    const posts = descriptionParts[2].split(" ")[0];

    // Obter título e imagem do perfil
    const ogTitle = await page.$eval('meta[property="og:title"]', element => element.content);
    const ogImage = await page.$eval('meta[property="og:image"]', element => element.content);

    const usernameMatch = ogTitle ? ogTitle.match(/\(@(.+?)\)/) : null;
    const extractedUsername = usernameMatch ? usernameMatch[1] : username;

    await browser.close();

    res.status(200).json({
      username: extractedUsername,
      fullName: ogTitle ? ogTitle.split(" (@")[0].trim() : "",
      profileData: {
        followers: followers,
        following: following,
        posts: posts,
      },
      profilePicture: ogImage,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro ao obter dados do perfil do Instagram",
      message: error.message
    });
  }
});

export { classesRoutes };
