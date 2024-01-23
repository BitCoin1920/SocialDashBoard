import { Request, Response } from "express";
import { UpdateBankDataUseCase} from "./updateBankDataUseCase";


export class UpdateBankDataController {
  async handle(req: Request, res: Response) {
    const {id, name, cpf, type, pix, value, influencer } = req.body;


    const updateBankDataUseCase = new UpdateBankDataUseCase();

    const result = await updateBankDataUseCase.execute({
      id, name, cpf, type, pix, value, influencer 
    });

    return res.status(201).json(result);
  }
}
