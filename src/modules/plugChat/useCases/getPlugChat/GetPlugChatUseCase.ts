import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { GetPlugChatDTO } from "../../dtos/GetPlugChatDTO";

export class GetPlugChatUseCase {
  async execute({ id }: GetPlugChatDTO) {
    try {
      const plugchat = await prisma.plugChat.findUnique({
        where: {
          id: id,
        },
        select:{
          id: true,
          link: true,
          hour_init: true,
          date_init: true,
          influencer_rent:{
            select:{
              id: true,
              request_archiving: true,
              archiving: true,
              username: true,
              fullname: true,
              photo: true,
              email: true,
              phone: true,  
              following: true,
              followers: true,
              method_contact: true,
              pix_bank:{
                select:{
                  id: true,
                  name: true,
                  cpf: true,
                  type: true,
                  pix: true,
                  value: true
                }
              },
              captacao_influencer:{
                select:{
                  id: true,
                  fullname: true,
                  email: true,
                  photo: true,
                  type_user:{
                    select:{
                      type: true
                    }
                  }
                }
              },       
              posts: {
                select:{
                  id: true,
                  posted: true,
                  title: true,
                  start: true,
                  className: true,
                  observation: true,
                }
              }
            }
          },
          responsavel_rent:{
            select:{
              id: true,
              fullname: true,
              email: true,
              photo: true,
              type_user:{
                select:{
                  type: true
                }
              }
            }
          },




        },
        /* include: {
          influencer_rent: {
            select: {
              id: true,
              username: true,
              fullname: true,
              photo: true,
              email: true,
              phone: true,  
              following: true,
              followers: true,
              posts: {
                select:{
                  id: true,
                  posted: true,
                  date: true,
                  observation: true,
                }
              }
            },         
          },        
        }, */
      });

      return plugchat;
    } catch (error) {
      throw new AppError(`Error returning PlugChat details! - ${error}`, 400);
    }
  }
}
