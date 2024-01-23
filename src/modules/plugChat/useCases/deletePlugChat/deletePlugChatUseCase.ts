import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { DeletePlugChatDTO } from "../../dtos/DeletePlugChatDTO";

export class DeletePlugChatUseCase {
  async execute({ id }: DeletePlugChatDTO) {
    const plugChatExists = await prisma.plugChat.findUnique({
      where: {
        id,
      },
    });

    if (!plugChatExists) {
      throw new AppError("Bank Data not exists!");
    }

    await prisma.plugChat.delete({
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
