import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePostDTO } from "../../dtos/CreatePostDTO";

import { Posts } from "@prisma/client";

export class CreatePostUseCase {
  async execute({posted, title, start, className, influencer, observation  }: CreatePostDTO): Promise<Posts> {
    try {
      const posts = await prisma.posts.create({
        data: {
          posted, title, start, className, influencer, observation 
        },
      });

      return posts;
      
    } catch (error) {
      throw new AppError(`Error when registering post - ${error}`, 400);
    }
  }
}
