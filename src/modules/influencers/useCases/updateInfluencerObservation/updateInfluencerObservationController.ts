import { Request, Response } from "express";
import { UpdateInfluencerUseCase} from "./updateInfluencerObservationUseCase";


export class UpdateInfluencerObservationController {
  async handle(req: Request, res: Response) {
    let {
      id,
      observation
    } = req.body;


    const updateInfluencerUseCase = new UpdateInfluencerUseCase();

    const result = await updateInfluencerUseCase.execute({
      id,
      observation
    });

    return res.status(201).json(result);
  }
}
