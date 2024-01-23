import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
  async handle(req: Request, res: Response) {
    let { posted, title, start, className, influencer, observation } = req.body;
    posted = JSON.parse(posted.toLowerCase());
    start = new Date(start)
 
    const createPostUseCase = new CreatePostUseCase();

    const result = await createPostUseCase.execute({
      posted, title, start, className, influencer, observation 
    });

    return res.status(201).json(result);
  }
}
