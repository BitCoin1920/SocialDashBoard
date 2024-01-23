import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { CreateCampaignDTO } from "../../dtos/CreateCampaignDTO";

import { Campaigns  } from "@prisma/client";

export class CreateCampaignUseCase {
  async execute({ name }: CreateCampaignDTO): Promise<Campaigns> {
    const campaign = await prisma.campaigns.create({
      data: {
        name,
      },
    });

    return campaign;
  }
}
