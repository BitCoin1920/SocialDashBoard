import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateInfluencerDTO } from "../../dtos/UpdateInfluencerStatusDTO";

export class UpdateInfluencerUseCase {
  async execute({ id, status }: UpdateInfluencerDTO) {

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
        status,
      },
    });

    return influencer;
  }
}
