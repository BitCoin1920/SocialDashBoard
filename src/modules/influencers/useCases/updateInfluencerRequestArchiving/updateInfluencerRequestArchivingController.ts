import { Request, Response } from "express";
import { UpdateInfluencerRequestArchivingUseCase} from "./updateInfluencerRequestArchivingUseCase";


export class UpdateInfluencerRequestArchivingController {
  async handle(req: Request, res: Response) {
    let {
      id,
      request_archiving
    } = req.body;

    request_archiving = Boolean(request_archiving);

    const updateInfluencerRequestArchivingUseCase = new UpdateInfluencerRequestArchivingUseCase();

    const result = await updateInfluencerRequestArchivingUseCase.execute({
      id,
      request_archiving
    });

    return res.status(201).json(result);
  }
}
