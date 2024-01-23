import { Request, Response } from "express";
import { UpdateInfluencerUseCase } from "./updateInfluencerUseCase";

export class UpdateInfluencerStatusCampaignController {
  async handle(req: Request, res: Response) {
    let { id, status, campaigns } = req.body;

    status = parseInt(status);

    const updateInfluencerUseCase = new UpdateInfluencerUseCase();

    const result = await updateInfluencerUseCase.execute({
      id,
      status,
      campaigns,
    });

    return res.status(201).json(result);
  }
}
