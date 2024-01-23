import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

import { DropCategoryDTO } from "../../dtos/DropPostDTO";

export class DropPostUseCase {
  async execute({ id }: DropCategoryDTO) {
    const categoryExists = await prisma.posts.findUnique({
      where: {
        id,
      },
    });

    if (!categoryExists) {
      throw new AppError("post not exists!", 404);
    }

    await prisma.posts.delete({
      where: {
        id: id,
      },
    });

    return {
      success: true,
      message: "Post deleted successfully!",
    };
  }
}
