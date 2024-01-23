import { Request, Response } from "express";
import { UpdateInfluencerUseCase} from "./updateInfluencerUseCase";


export class UpdateInfluencerStatusController {
  async handle(req: Request, res: Response) {
    let {
      id,
      status
    } = req.body;

    status = parseInt(status)

    const updateInfluencerUseCase = new UpdateInfluencerUseCase();

    const result = await updateInfluencerUseCase.execute({
      id,
      status
    });

    return res.status(201).json(result);
  }
}
