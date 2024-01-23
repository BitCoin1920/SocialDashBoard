import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteBankDataDTO } from "../../dtos/DeleteBankDataDTO";

export class DeleteBankDataUseCase {
  async execute({ id }: DeleteBankDataDTO) {
    const bankDataExists = await prisma.bankData.findUnique({
      where: {
        id,
      },
    });

    if (!bankDataExists) {
      throw new AppError("Bank Data not exists!", 404);
    }

    await prisma.bankData.delete({
      where: {
        id: id,
      },
    });

    return {
      status: "success",
      message: "Delete Successfully",
    };
  }
}
