import { Request, Response } from "express";
import { CreateInfluencerUseCase } from "./CreateInfluencerUseCase";

export class CreateInfluencerController {
  async handle(req: Request, res: Response) {
    let {
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

    email = email.toLowerCase();
    status = parseInt(status)

    const createInfluencerUseCase = new CreateInfluencerUseCase();

    const result = await createInfluencerUseCase.execute({
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
