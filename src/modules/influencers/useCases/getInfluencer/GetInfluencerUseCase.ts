import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";
import {GetInfluencerDTO} from "../../dtos/GetInfluencerDTO";
export class GetInfluencerUseCase {
  async execute({ id }:GetInfluencerDTO) {
    const user = await prisma.influencer.findUnique({
      where:{
        id: id
      }
    });

    return user;
  }
}
