import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { GetBankDataDTO } from "../../dtos/GetBankDataDTO";

export class GetInfluencerUseCase {
  async execute({ id }: GetBankDataDTO) {
    try {
      const bankData = await prisma.bankData.findUnique({
        where: {
          id: id,
        },
      });

      return bankData;
    } catch (error) {
      throw new AppError("Error returning bank details!");
    }
  }
}
