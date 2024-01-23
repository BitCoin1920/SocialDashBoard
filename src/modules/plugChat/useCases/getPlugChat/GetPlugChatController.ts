import { Request, Response } from "express";
import { GetPlugChatUseCase } from "./GetPlugChatUseCase";

export class GetPlugChatController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const getPlugChatUseCase = new GetPlugChatUseCase();

        const result = await getPlugChatUseCase.execute({id});

        return res.status(200).json(result);
    }
}