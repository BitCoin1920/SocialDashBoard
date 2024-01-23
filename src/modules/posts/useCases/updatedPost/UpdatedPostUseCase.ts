import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdatedPostDTO } from "../../dtos/UpdatedPostDTO";

import { Posts } from "@prisma/client";

export class UpdatedPostUseCase {
  async execute({
    id,
    posted, title, start, className, influencer, observation 
  }: UpdatedPostDTO): Promise<Posts> {
    try {
      const postAlreadyExists = await prisma.posts.findUnique({
        where: {
          id,
        },
      });

      if (!postAlreadyExists) {
        throw new AppError("Post not exists!", 404);
      }

      const posts = await prisma.posts.update({
        where: {
          id: id,
        },
        data: {
          posted, title, start, className, influencer, observation 
        },
      });

      return posts;
    } catch (error) {
      throw new AppError("Error when updating post!", 400);
    }
  }
}
