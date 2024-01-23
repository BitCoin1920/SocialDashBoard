import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
export class GetPlugChatUseCase {
  async execute(): Promise<object[]> {
    try {
      const plugchat = await prisma.plugChat.findMany({
        orderBy: {
          created_at: "desc",
        },
        include: {
          influencer_rent: {
            select: {
              id: true,
              request_archiving: true,
              archiving: true,
              username: true,
              fullname: true,
              photo: true,
              email: true,
              phone: true,    
              method_contact: true,   
              campaigns_influencer:{
                select:{
                  id: true,
                  name: true,
                }
              }    
            },
          },
          responsavel_rent:{
            select:{
              id: true,
              fullname: true
            }
          }
        },
      });
      return plugchat;
    } catch (error) {
      throw new AppError("Error returning bank details!", 400);
    }
  }
}
