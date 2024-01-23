import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateInfluencerArchivingDTO } from "../../dtos/UpdateInfluencerArchivingDTO";

export class UpdateInfluencerArchivingUseCase {
  async execute({ id, request_archiving,  archiving }: UpdateInfluencerArchivingDTO) {
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
        request_archiving,
        archiving,
      },
    });

    return influencer;
  }
}
