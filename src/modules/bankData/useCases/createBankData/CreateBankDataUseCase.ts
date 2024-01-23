import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateBankDataDTO } from "../../dtos/CreateBankDataDTO";

export class CreateBankDataUseCase {
  async execute({ name, cpf, type, pix, value, influencer }: CreateBankDataDTO) {
     const userAlreadyExists = await prisma.bankData.findUnique({
      where: {
        pix,
      },
    });

     const userAlreadyPlugChatExists = await prisma.plugChat.findFirst({
      where: {
        influencer,
      },
    });

    if (userAlreadyExists || userAlreadyPlugChatExists) {
      throw new AppError("Influencer already exists!" , 409);
    } 

    const bank = await prisma.bankData.create({
      data: {
        name: name,
        cpf: cpf,
        type: type,
        pix: pix,
        value: value,
        influencer: influencer,
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

    return bank;
  }
}
