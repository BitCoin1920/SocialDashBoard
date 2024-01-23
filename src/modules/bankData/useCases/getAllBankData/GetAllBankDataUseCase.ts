import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
export class GetAllBankDataUseCase {
  async execute(): Promise<object[]> {
    try {
      const bankData = await prisma.bankData.findMany({
        orderBy: {
          created_at: "asc",
        },
        include: {
          influencer_rent: {
            select: {
              id: true,
              username: true,
              fullname: true,
            },
          },
        },
      });
      return bankData;
    } catch (error) {
      throw new AppError("Error returning bank details!", 400);
    }
  }
}
