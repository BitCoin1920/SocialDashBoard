import { Router, Request, Response } from 'express';
import puppeteer from 'puppeteer';

const profileScrapingRoutes = Router();

async function scrapeInstagramProfile(username: string, hashtag: string) {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();

        // Navegue até o perfil do usuário no Instagram
        await page.goto(`https://www.instagram.com/${username}/`, { waitUntil: 'networkidle2' });

        // Aguarde um elemento específico que indica que a página carregou
        await page.waitForSelector('section main');

        // Extraia o conteúdo do perfil do usuário
        const profileContent = await page.$eval('section main', (main) => main.innerHTML);

        // Conte quantas vezes a hashtag aparece no conteúdo do perfil
        const regex = new RegExp(`#${hashtag}`, 'gi');
        const hashtagCount = (profileContent.match(regex) || []);

        return hashtagCount;
    } catch (error) {
        throw error;
    } finally {
        await browser.close();
    }
}

profileScrapingRoutes.get('/euorlandinho/:hashtag', async (req: Request, res: Response) => {
    try {
        const { hashtag } = req.params;
        const username = 'euorlandinho'; // Nome de usuário específico
        const hashtagCount = await scrapeInstagramProfile(username, hashtag);

        // Envie o número de publicações com a hashtag como resposta
        res.json({ hashtagCount });
    } catch (error) {
        console.error('Erro ao fazer scraping do perfil do Instagram:', error);
        res.status(500).json({ error: 'Erro ao fazer scraping do perfil do Instagram.' });
    }
});

export { profileScrapingRoutes };
