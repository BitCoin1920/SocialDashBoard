import { Request, Response } from "express";
import { UpdatePlugChatUseCase} from "./updatePlugChatUseCase";


export class UpdatePlugChatController {
  async handle(req: Request, res: Response) {
    const {id, link, influencer, responsavel, date_init, hour_init} = req.body;


    const updatePlugChatUseCase = new UpdatePlugChatUseCase();

    const result = await updatePlugChatUseCase.execute({
      id, link, influencer, responsavel, date_init, hour_init
    });

    return res.status(201).json(result);
  }
}
