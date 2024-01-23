import { Request, Response } from "express";
import { GetCampaignUseCase } from "./GetCampaignUseCase";

export class GetCampaignController {
    async handle(req: Request, res: Response) {

        const getCampaignUseCase = new GetCampaignUseCase();

        const result = await getCampaignUseCase.execute();

        return res.status(200).json(result);
    }
}