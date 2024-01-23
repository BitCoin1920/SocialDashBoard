import { Request, Response } from "express";
import { CreateStatusUseCase } from "./CreateStatusUseCase";

export class CreateStatusController {
  async handle(req: Request, res: Response) {
    let {status } = req.body;

    const createStatusUseCase = new CreateStatusUseCase();

    const result = await createStatusUseCase.execute({
      status,
    });

    return res.status(201).json(result);
  }
}
