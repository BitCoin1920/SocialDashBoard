import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdatedBankDataDTO } from "../../dtos/UpdateBankDataDTO";

export class UpdateBankDataUseCase {
  async execute({
    id, name, cpf, type, pix, value, influencer
  }: UpdatedBankDataDTO) {
    const bankDataAlreadyExists = await prisma.bankData.findUnique({
      where: {
        id,
      },
    });

    if (!bankDataAlreadyExists) {
      throw new AppError("Bank Data not exists!", 404);
    }

    const bankData = await prisma.bankData.update({
      where: {
        id: id,
      },
      data: {
        name, cpf, type, pix, value, influencer
      },
      select: {
        id: true,
        name: true,
        cpf: true,
        type: true,
        pix: true,
        value: true,
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
  }
}
