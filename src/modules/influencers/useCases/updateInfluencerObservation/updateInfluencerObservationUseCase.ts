import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateObservationDTO } from "../../dtos/UpdateInfluencerObservationDTO";

export class UpdateInfluencerUseCase {
  async execute({ id, observation }: UpdateObservationDTO) {
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
        observation,
      },
    });

    return influencer;
  }
}
