import { Request, Response } from "express";
import { CreatePlugChatUseCase } from "./CreatePlugChatUseCase";

export class CreatePlugChatController {
  async handle(req: Request, res: Response) {
    let { link, influencer, responsavel, date_init, hour_init } = req.body;

    const createPlugChatUseCase = new CreatePlugChatUseCase();

    const result = await createPlugChatUseCase.execute({
      link, influencer, responsavel, date_init, hour_init 
    });

    return res.status(201).json(result);
  }
}



