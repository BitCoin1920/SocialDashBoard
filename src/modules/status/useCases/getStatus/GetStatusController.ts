import { Request, Response } from "express";
import { GetStatusUseCase } from "./GetStatusUseCase";

export class GetStatusController {
    async handle(req: Request, res: Response) {

        const getStatusUseCase = new GetStatusUseCase();

        const result = await getStatusUseCase.execute();

        return res.status(200).json(result);
    }
}