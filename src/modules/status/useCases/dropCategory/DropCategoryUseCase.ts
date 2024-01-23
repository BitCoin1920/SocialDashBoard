import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

import { DropCategoryDTO } from "../../dtos/DropCategoryDTO";

export class DropCategoryUseCase {
  async execute({ id }: DropCategoryDTO) {
    const categoryExists = await prisma.categoryGames.findUnique({
      where: {
        id,
      },
    });

    if (!categoryExists) {
      throw new AppError("category not exists!");
    }

    await prisma.categoryGames.delete({
      where: {
        id: id,
      },
    });

    return {
      success: true,
      message: "Game deleted successfully!",
    };
  }
}
