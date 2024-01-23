import { Request, Response } from "express";
import { DropPostUseCase } from "./DropPostUseCase";

export class DropPostController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const dropPostUseCase = new DropPostUseCase();

    const result = await dropPostUseCase.execute({
      id,
    });

    return res.status(200).json(result);
  }
}
