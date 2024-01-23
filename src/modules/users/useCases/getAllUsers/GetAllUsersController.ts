import { Request, Response } from "express";
import { GetAllUsersUseCase } from "./GetGruposUsersUseCase";

export class GetAllUsersController {
    async handle(req: Request, res: Response) {
        let { type } = req.params;

        const getAllUsersUseCase = new GetAllUsersUseCase();

        const result = await getAllUsersUseCase.execute({type});

        return res.status(201).json(result);
    }
}