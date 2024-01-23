import { Request, Response } from "express";
import { DropCategoryUseCase } from "./DropCategoryUseCase";

export class DropCategoryController {
  async handle(req: Request, res: Response) {
    let { id } = req.body;

    id = parseInt(id);

    const dropCategoryUseCase = new DropCategoryUseCase();

    const result = await dropCategoryUseCase.execute({
      id,
    });

    return res.status(201).json(result);
  }
}
