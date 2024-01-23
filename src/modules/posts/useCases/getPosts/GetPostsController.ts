import { Request, Response } from "express";
import { GetPostsUseCase } from "./GetPostsUseCase";

export class GetPostsController {
    async handle(req: Request, res: Response) {

        const getPostsUseCase = new GetPostsUseCase();

        const result = await getPostsUseCase.execute();

        return res.status(200).json(result);
    }
}