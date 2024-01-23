import { Request, Response } from "express";
import { GetInfluencerUseCase } from "./GetInfluencerUseCase";

export class GetBankDataController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;
        const getInfluencerUseCase = new GetInfluencerUseCase();

        const result = await getInfluencerUseCase.execute({id});

        return res.status(200).json(result);
    }
}