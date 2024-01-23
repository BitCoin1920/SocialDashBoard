import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
    async handle(req: Request, res: Response) {
        let { id } = req.params;
        const getUserUseCase = new GetUserUseCase();

        const result = await getUserUseCase.execute({id});

        return res.status(201).json(result);
    }
}