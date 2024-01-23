import { Request, Response } from "express";
import { GetPostUseCase } from "./GetPostsUseCase";

export class GetPostController {
    async handle(req: Request, res: Response) {

        const { id } = req.body;

        const getPostUseCase = new GetPostUseCase();

        const result = await getPostUseCase.execute({id});

        return res.status(200).json(result);
    }
}