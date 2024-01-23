import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetCategoryUseCase {
  async execute(): Promise<object[]> {
    const category = await prisma.typeUser.findMany({});

    return category;
  }
}
