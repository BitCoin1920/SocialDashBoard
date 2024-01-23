import { Request, Response } from "express";
import { CreateTypeUseCase } from "./CreateTypeUseCase";

export class CreateTypeController {
  async handle(req: Request, res: Response) {
    let {type } = req.body;

    const createTypeUseCase = new CreateTypeUseCase();

    const result = await createTypeUseCase.execute({
      type,
    });

    return res.status(201).json(result);
  }
}
