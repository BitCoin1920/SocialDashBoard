import { Request, Response } from "express";
import { GetCategoryUseCase } from "./GetCategoryUseCase";

export class GetCategoryController {
    async handle(req: Request, res: Response) {

        const getCategoryUseCase = new GetCategoryUseCase();

        const result = await getCategoryUseCase.execute();

        return res.status(200).json(result);
    }
}