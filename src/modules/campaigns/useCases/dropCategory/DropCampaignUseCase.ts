import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

import { DropCampaignDTO } from "../../dtos/DropCampaignDTO";

export class DropCampaignUseCase {
  async execute({ id }: DropCampaignDTO) {
    const campaignExists = await prisma.campaigns.findUnique({
      where: {
        id,
      },
    });

    if (!campaignExists) {
      throw new AppError("category not exists!", 400);
    }

    await prisma.campaigns.delete({
      where: {
        id: id,
      },
    });

    return {
      success: true,
      message: "Campaign deleted successfully!",
    };
  }
}
