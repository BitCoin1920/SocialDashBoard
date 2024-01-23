import { Request, Response } from "express";
import { LoginUseCase } from "./LoginUseCase";

export class LoginController {
  async handle(req: Request, res: Response) {
    let { email, password } = req.body;
    email = email.toLowerCase();

    const loginUseCase = new LoginUseCase();

    const result = await loginUseCase.execute({
      email,
      password,
    });

    return res.status(200).json(result);
  }
}
