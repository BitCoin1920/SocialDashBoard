import { Request, Response } from "express";
import { UpdateInfluencerUseCase } from "./updateInfluencerUseCase";

export class UpdateInfluencerController {
  async handle(req: Request, res: Response) {
    let {
      id,
      phone,
      email,
      fullname,
      photo,
      username,
      following,
      followers,
      method_contact,
      status,
      captacao,
    } = req.body;

    status = parseInt(status);
    email = email.toLowerCase();

    const updateInfluencerUseCase = new UpdateInfluencerUseCase();

    const result = await updateInfluencerUseCase.execute({
      id,
      phone,
      email,
      fullname,
      photo,
      username,
      following,
      followers,
      method_contact,
      status,
      captacao,
    });

    return res.status(201).json(result);
  }
}
