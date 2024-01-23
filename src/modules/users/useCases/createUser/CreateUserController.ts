import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import bcrypt from "bcryptjs";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    let { email, fullname, photo, type, pass} = req.body;

    email = email.toLowerCase();
    type = parseInt(type)

    async function encryptPassword(password: string): Promise<string> {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    }


    const password = await encryptPassword(pass);

    function generateRandomPassword(length: number) {
      const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+;:,<.>/?';
      let password = '';
    
      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
      }
    
      return password;
    }

    let remember_password = generateRandomPassword(12);
    let last_login = String(new Date())

    const createUserUseCase = new CreateUserUseCase();

    const result = await createUserUseCase.execute({
      email,
      fullname,
      photo,
      type,
      password,
      remember_password,
      last_login
    });

    return res.status(201).json(result);
  }
}
