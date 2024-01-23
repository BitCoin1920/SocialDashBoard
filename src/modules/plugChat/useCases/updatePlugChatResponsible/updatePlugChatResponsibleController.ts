import { Request, Response } from "express";
import { UpdatePlugChatResponsibleUseCase} from "./updatePlugChatResponsibleUseCase";


export class UpdatePlugChatResponsibleController {
  async handle(req: Request, res: Response) {
    const {id, responsavel} = req.body;


    const updatePlugChatResponsibleUseCase = new UpdatePlugChatResponsibleUseCase();

    const result = await updatePlugChatResponsibleUseCase.execute({
      id, responsavel
    });

    return res.status(201).json(result);
  }
}
