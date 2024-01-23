import { Request, Response } from "express";
import { UpdatedPostUseCase } from "./UpdatedPostUseCase";

export class UpdatedPostController {
  async handle(req: Request, res: Response) {
    let { id, posted, title, start, className, influencer, observation } = req.body;

    posted = Boolean(posted);
    start = new Date(start)

    const updatedPostUseCase = new UpdatedPostUseCase();

    const result = await updatedPostUseCase.execute({
      id, posted, title, start, className, influencer, observation 
    });

    return res.status(201).json(result);
  }
}
