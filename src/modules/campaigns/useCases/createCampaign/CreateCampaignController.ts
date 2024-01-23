import { Request, Response } from "express";
import { CreateCampaignUseCase } from "./CreateCampaignUseCase";

export class CreateCampaignController {
  async handle(req: Request, res: Response) {
    let { name } = req.body;

    const createCampaignUseCase = new CreateCampaignUseCase();

    const result = await createCampaignUseCase.execute({
      name,
    });

    return res.status(201).json(result);
  }
}
