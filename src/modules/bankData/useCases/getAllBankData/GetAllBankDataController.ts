import { Request, Response } from "express";
import { GetAllBankDataUseCase } from "./GetAllBankDataUseCase";

export class GetAllBankDataController {
    async handle(req: Request, res: Response) {

        const getAllBankDataUseCase = new GetAllBankDataUseCase();

        const result = await getAllBankDataUseCase.execute();

        return res.status(200).json(result);
    }
}