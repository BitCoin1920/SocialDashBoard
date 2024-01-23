import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
export class GetAllInfluencersUseCase {
  async execute(): Promise<object[]> {
    const users = await prisma.influencer.findMany({
      orderBy:{
        created_at: 'desc'
      },
      include:{
        status_influencer:{
          select:{
            status: true
          }
        },
        captacao_influencer:{
          select:{
            fullname: true
          }
        },
        plug_chat:{
          select:{
            id: true,
            responsavel_rent:{
              select:{
                fullname: true
              }
            }
          }
        } ,
        campaigns_influencer:{
          select:{
            id: true,
            name: true
          }
        }
      },
    });


    return users;
  }
}
