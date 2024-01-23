import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateInfluencerRequestArchivingDTO } from "../../dtos/UpdateInfluencerRequestArchivingDTO";

export class UpdateInfluencerRequestArchivingUseCase {
  async execute({ id, request_archiving }: UpdateInfluencerRequestArchivingDTO) {
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
      },
    });

    return influencer;
  }
}
