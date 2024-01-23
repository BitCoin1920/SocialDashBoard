import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdatedPlugChatDTO } from "../../dtos/UpdatePlugChatDTO";

export class UpdatePlugChatUseCase {
  async execute({
    id, link, influencer, responsavel, date_init, hour_init
  }: UpdatedPlugChatDTO) {
    const bankDataAlreadyExists = await prisma.plugChat.findUnique({
      where: {
        id,
      },
    });

    if (!bankDataAlreadyExists) {
      throw new AppError("Bank Data not exists!");
    }

    const bankData = await prisma.plugChat.update({
      where: {
        id: id,
      },
      data: {
        link, influencer, responsavel, date_init, hour_init
      },
      select: {
        id: true,
        link: true,
        date_init: true,
        hour_init: true,
        influencer_rent:{
          select:{
            id: true,
            fullname: true
          }
        },
      responsavel_rent:{
        select:{
          id: true,
          fullname: true
        }
      }
    }
    });

    return bankData;
  }
}
