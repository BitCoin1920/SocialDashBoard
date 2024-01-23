import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { GetAllDTO } from "../../dtos/GetAllUsers";
export class GetAllUsersUseCase {
  async execute({ type }: GetAllDTO): Promise<object[]> {
    const users = await prisma.user.findMany({
      where: {
        type_user: {
          type: type,
        },
      },

      select: {
        id: true,
        email: true,
        fullname: true,
        photo: true,
        plug_chat: {
          select: {
            influencer_rent: {
              select: {
                fullname: true,
              },
            },
          },
        },
      },
    });

    return users;
  }
}
