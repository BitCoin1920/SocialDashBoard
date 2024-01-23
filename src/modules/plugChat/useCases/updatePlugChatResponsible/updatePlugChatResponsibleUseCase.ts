import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdatedPlugChatResponsibleDTO } from "../../dtos/UpdatePlugChatResponsibleDTO";

export class UpdatePlugChatResponsibleUseCase {
  async execute({
    id, responsavel
  }: UpdatedPlugChatResponsibleDTO) {
    const plugchatAlreadyExists = await prisma.plugChat.findUnique({
      where: {
        id: id,
      },
    });

    if (!plugchatAlreadyExists) {
      throw new AppError("Plug Chat not exists!", 400);
    }

    const plugchat = await prisma.plugChat.update({
      where: {
        id: id,
      },
      data: {
        responsavel
      }
    });

    return plugchat;
  }
}
