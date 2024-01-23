import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateStatusDTO } from "../../dtos/StatusDTO";

import { Status } from "@prisma/client";

export class CreateStatusUseCase {
  async execute({ status }: CreateStatusDTO): Promise<Status> {
    const categories = await prisma.status.create({
      data: {
        status,
      },
    });

    return categories;
  }
}
