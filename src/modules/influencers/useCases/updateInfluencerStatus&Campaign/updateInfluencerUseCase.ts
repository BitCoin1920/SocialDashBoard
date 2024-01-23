import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateInfluencerDTO } from "../../dtos/UpdateInfluencerStatus&CampaignDTO";

export class UpdateInfluencerUseCase {
  async execute({ id, status, campaigns }: UpdateInfluencerDTO) {

    const userAlreadyExists = await prisma.influencer.findUnique({
      where: {
        id,
      },
    });

    const campaignAlreadyExists = await prisma.campaigns.findUnique({
      where: {
        id: campaigns,
      },
    });

    if (!userAlreadyExists) {
      throw new AppError("Influencer not exists!", 400);
    }

    if (!campaignAlreadyExists) {
      throw new AppError("Campaign not exists!", 400);
    }

    const influencer = await prisma.influencer.update({
      where: {
        id: id,
      },
      data: {
        status,
        campaigns
      },
    });

    return influencer;
  }
}
