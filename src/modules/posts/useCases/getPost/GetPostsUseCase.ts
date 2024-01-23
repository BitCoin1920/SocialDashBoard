import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { GetCategoryDTO } from "../../dtos/GetPostDTO";
import { Posts } from "@prisma/client";

export class GetPostUseCase {
  async execute({ id }: GetCategoryDTO) {
    try {
      const posts = await prisma.posts.findUnique({
        where: {
          id: id,
        },
      });

      return posts;
    } catch (error) {
      throw new AppError("Error returning posts!", 400);
    }
  }
}
