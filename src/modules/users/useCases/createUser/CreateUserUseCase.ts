import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";

import { generateToken } from "../../../../utilities/jwtUtils";

export class CreateUserUseCase {
  async execute({
    email,
    fullname,
    photo,
    type,
    password,
    remember_password,
    last_login,
  }: CreateUserDTO): Promise<object> {
    const userAlreadyExists = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("User already exists!", 409);
    }

    const user = await prisma.user.create({
      data: {
        email,
        fullname,
        photo,
        type,
        password,
        remember_password,
        last_login,
      }, 
      select:{
        id: true,
        photo: true,
        email: true,
        fullname: true,
        type_user:{
          select:{
            id: true,
            type: true
          }
        },
      },
      
  
    });

    const constructorToken = {
      userId: user.id,
      email: user.email,
      fullname: user.fullname,
    };

    const token = generateToken(constructorToken);

    const result = {
      userId: user.id,
      photo: user.photo,
      email: user.email,
      fullname: user.fullname,
      type: user.type_user,
      token: token,
    };

    return result;
  }
}
