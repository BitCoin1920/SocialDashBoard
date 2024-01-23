import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateInfluencerDTO } from "../../dtos/UpdateInfluencerDTO";

export class UpdateInfluencerUseCase {
  async execute({
    id,
    phone,
    email,
    fullname,
    photo,
    username,
    following,
    followers,
    method_contact,
    status,
    captacao,
  }: UpdateInfluencerDTO) {
    const userAlreadyExists = await prisma.influencer.findUnique({
      where: {
        id,
      },
    });

    if (!userAlreadyExists) {
      throw new AppError("Influencer not exists!", 400);
    }

    const influencer = await prisma.influencer.update({
      where: {
        id: id,
      },
      data: {
        phone,
        email,
        fullname,
        photo,
        username,
        following,
        followers,
        method_contact,
        status,
        captacao,
      },
      select: {
        id: true,
        phone: true,
        email: true,
        fullname: true,
        photo: true,
        username: true,
        following: true,
        followers: true,
        method_contact: true,
        status: true,
        status_influencer: {
          select: {
            status: true,
          },
        },
        pix_bank: {
          select: {
            id: true,
            type: true,
            pix: true,
            value: true,
          },
        },
      },
    });

    return influencer;
  }
}
