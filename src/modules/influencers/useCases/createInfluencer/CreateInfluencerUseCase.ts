import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateInfluencerDTO } from "../../dtos/CreateInfluencerDTO";

export class CreateInfluencerUseCase {
  async execute({
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
  }: CreateInfluencerDTO) {
    const userAlreadyExists = await prisma.influencer.findFirst({
      where: {
        username,
      },
    });

    if (userAlreadyExists) {
      throw new AppError("Influencer already exists!", 409);
    }
    
    const influencer = await prisma.influencer.create({
      data: {
        phone: phone,
        email: email,
        fullname: fullname,
        photo: photo,
        username: username,
        following: following,
        followers: followers,
        method_contact: method_contact,
        status: status,
        captacao: captacao,
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
        captacao: true,
        status_influencer: {
          select: {
            status: true,
          },
        },
        pix_bank : {
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
