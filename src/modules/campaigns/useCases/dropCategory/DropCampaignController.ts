import { Request, Response } from "express";
import { DropCampaignUseCase } from "./DropCampaignUseCase";

export class DropCampaignController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const dropCampaignUseCase = new DropCampaignUseCase();

    const result = await dropCampaignUseCase.execute({
      id,
    });

    return res.status(201).json(result);
  }
}
