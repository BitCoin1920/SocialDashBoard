import { Request, Response } from "express";
import { GetAllInfluencersUseCase } from "./GetAllInfluencersUseCase";

export class GetAllInfluencersController {
    async handle(req: Request, res: Response) {

        const getAllInfluencersUseCase = new GetAllInfluencersUseCase();

        const result = await getAllInfluencersUseCase.execute();

        return res.status(200).json(result);
    }
}