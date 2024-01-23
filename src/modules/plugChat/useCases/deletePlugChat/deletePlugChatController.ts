import { Request, Response } from "express";
import { DeletePlugChatUseCase } from "./deletePlugChatUseCase";

export class DeletePlugChatController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deletePlugChatUseCase = new DeletePlugChatUseCase();

    const result = await deletePlugChatUseCase.execute({ id });

    return res.status(201).json(result);
  }
}
