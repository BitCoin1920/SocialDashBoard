import { Request, Response } from "express";
import { GetAllUseCase } from "./GetAllUseCase";

export class GetAllController {
    async handle(req: Request, res: Response) {

        const getAllUseCase = new GetAllUseCase();

        const result = await getAllUseCase.execute();

        return res.status(201).json(result);
    }
}