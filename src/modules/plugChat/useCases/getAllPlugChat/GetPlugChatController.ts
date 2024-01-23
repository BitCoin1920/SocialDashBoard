import { Request, Response } from "express";
import { GetPlugChatUseCase } from "./GetPlugChatUseCase";

export class GetAllPlugChatController {
    async handle(req: Request, res: Response) {

        const getPlugChatUseCase = new GetPlugChatUseCase();

        const result = await getPlugChatUseCase.execute();

        return res.status(200).json(result);
    }
}