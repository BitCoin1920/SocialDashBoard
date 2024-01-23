import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
export class GetAllUseCase {
  async execute(): Promise<object[]> {
    const users = await prisma.user.findMany({
  
      select: {
        id: true,
        email: true,
        fullname: true,
        photo: true,
        type_user:{
          select:{
            type: true
          }
        }
      },
    });

    return users;
  }
}
