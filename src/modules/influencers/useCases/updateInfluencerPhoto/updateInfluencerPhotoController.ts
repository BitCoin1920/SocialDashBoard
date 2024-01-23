import { Request, Response } from "express";
import { UpdateInfluencerUseCase} from "./updateInfluencerPhotoUseCase";


export class UpdateInfluencerPhotoController {
  async handle(req: Request, res: Response) {
    let {
      id,
      photo
    } = req.body;


    const updateInfluencerUseCase = new UpdateInfluencerUseCase();

    const result = await updateInfluencerUseCase.execute({
      id,
      photo
    });

    return res.status(201).json(result);
  }
}
