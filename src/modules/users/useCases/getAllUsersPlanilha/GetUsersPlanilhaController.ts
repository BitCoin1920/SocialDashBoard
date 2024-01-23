/* import { Request, Response } from "express";
import { GetUsersPlanilhaUseCase } from "./GetUsersPlanilhaUseCase";
export class GetUsersPlanilhaController {
    async handle(req: Request, res: Response) {

        const getUsersPlanilhaUseCase = new GetUsersPlanilhaUseCase();

        const result = await getUsersPlanilhaUseCase.execute();

        return res.status(200).json(result);
    }
} */