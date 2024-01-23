import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetPostsUseCase {
  async execute(): Promise<object[]> {
    try {
      const posts = await prisma.posts.findMany({
        orderBy: {
          created_at: "desc",
        },
      });

      return posts;
    } catch (error) {
      throw new AppError("Error returning posts!", 400);
    }
  }
}
