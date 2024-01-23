import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetCampaignUseCase {
  async execute(): Promise<object[]> {
    try {
      const campaigns = await prisma.campaigns.findMany({
        select:{
          id: true,
           name: true
        }
      });

      return campaigns;
    } catch (error) {
      throw new AppError("Erro " + error, 400);
    }
  }
}
