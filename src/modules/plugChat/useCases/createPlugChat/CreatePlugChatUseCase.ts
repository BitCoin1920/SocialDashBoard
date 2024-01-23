import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreatePlugChatDTO } from "../../dtos/CreatePlugChatDTO";

export class CreatePlugChatUseCase {
  async execute({ link, influencer, responsavel, date_init, hour_init }: CreatePlugChatDTO) {

    const plugchatAlreadyExists = await prisma.plugChat.findUnique({
      where: {
        influencer,
      },
    });

    if (plugchatAlreadyExists) {
      throw new AppError("Group already exists!" , 409);
    } 
   

    const plug = await prisma.plugChat.create({
      data: {
        link: link,
        influencer: influencer,
        responsavel: responsavel,
        date_init: date_init,
        hour_init: hour_init,
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

    return plug;
  }
}
