import { Request, Response } from "express";
import { UpdateInfluencerArchivingUseCase} from "./updateInfluencerArchivingUseCase";


export class UpdateInfluencerArchivingController {
  async handle(req: Request, res: Response) {
    let {
      id,
      request_archiving,
      archiving
    } = req.body;

    request_archiving = Boolean(request_archiving);
    archiving = Boolean(archiving);

    const updateInfluencerArchivingUseCase = new UpdateInfluencerArchivingUseCase();

    const result = await updateInfluencerArchivingUseCase.execute({
      id,
      request_archiving,
      archiving
    });

    return res.status(201).json(result);
  }
}
