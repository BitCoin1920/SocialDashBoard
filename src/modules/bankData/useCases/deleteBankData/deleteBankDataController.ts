import { Request, Response } from "express";
import { DeleteBankDataUseCase } from "./deleteBankDataUseCase";

export class DeleteBankDataController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deleteBankDataUseCase = new DeleteBankDataUseCase();

    const result = await deleteBankDataUseCase.execute({ id });

    return res.status(201).json(result);
  }
}
