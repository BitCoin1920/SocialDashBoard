import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeleteInfluencerDTO } from "../../dtos/DeleteInfluencerDTO";

export class DeleteInfluencerUseCase {
  async execute({ id }: DeleteInfluencerDTO) {
    const userAlreadyExists = await prisma.influencer.findUnique({
      where: {
        id,
      },
    });

    if (!userAlreadyExists) {
      throw new AppError("Influencer not exists!");
    }

    await prisma.influencer.delete({
      where: {
        id: id,
      },
    });

    return {
      status: "success",
      message: "Delete Successfully",
    };
  }
}
