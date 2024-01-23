import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateTypeDTO } from "../../dtos/CreateTypeDTO";

import { TypeUser } from "@prisma/client";

export class CreateTypeUseCase {
  async execute({ type }: CreateTypeDTO): Promise<TypeUser> {
    const categories = await prisma.typeUser.create({
      data: {
        type,
      },
    });

    return categories;
  }
}
