import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetStatusUseCase {
  async execute(): Promise<object[]> {
    const status = await prisma.status.findMany({
    
    });

    return status;
  }
}
