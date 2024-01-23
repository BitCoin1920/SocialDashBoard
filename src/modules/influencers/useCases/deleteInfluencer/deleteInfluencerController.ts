import { Request, Response } from "express";
import { DeleteInfluencerUseCase } from "./deleteInfluencerUseCase";

export class DeleteInfluencerController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deleteInfluencerUseCase = new DeleteInfluencerUseCase();

    const result = await deleteInfluencerUseCase.execute({id});

    return res.status(201).json(result);
  }
}
