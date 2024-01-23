import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import { GetUserDTO } from "../../dtos/GetUser";
export class GetUserUseCase {
  async execute({ id }: GetUserDTO) {
    const users = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        email: true,
        fullname: true,
        photo: true,
        plug_chat: {
          select: {
            id: true,
            link: true,
            date_init: true,
            hour_init: true,
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
                    title: true,
                    start: true,
                    observation: true,
                    created_at: true
                  }
                },
                created_at: true,
              },
            },
          },
        },
        influencerCaptacao: {
          select: {
            id: true,
            username: true,
            fullname: true,
            photo: true,
            email: true,
            phone: true,
            following: true,
            followers: true,
            status_influencer: {
              select: {
                status: true,
              },
            },
            plug_chat: {
              select: {
                id: true,
                created_at: true,
              },
            },
          },
        },
        type_user: {
          select: {
            type: true,
          },
        },
        _count: {
          select: {
            plug_chat: true,
            influencerCaptacao: true,
          },
        },
      },
    });

    return users;
  }
}
