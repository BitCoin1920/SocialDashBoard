import { Request, Response } from "express";
import { CreateBankDataUseCase } from "./CreateBankDataUseCase";

export class CreateBankDataController {
  async handle(req: Request, res: Response) {
    let { name, cpf, type, pix, value, influencer } = req.body;

    const createBankDataUseCase = new CreateBankDataUseCase();

    const result = await createBankDataUseCase.execute({
      name, cpf, type, pix, value, influencer
    });

    return res.status(201).json(result);
  }
}
