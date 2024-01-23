import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { LoginDTO } from "../../dtos/LoginDTO";
import bcrypt from "bcryptjs";

import { generateToken } from "../../../../utilities/jwtUtils";

export class LoginUseCase {
  async execute({ email, password }: LoginDTO): Promise<object> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        type_user: {
          select: {
            type: true,

          },

        },
        influencerCaptacao:{
          select:{
            fullname: true
          }
        }
      },
    });

    if (!user) {
      throw new AppError("User not exists", 404);
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("invalid credentials", 401);
    }

    const constructorToken = {
      userId: user.id,
      email: user.email,
      fullname: user.fullname,
    };

    const token = generateToken(constructorToken);

    const result = {
      userId: user.id,
      photo: user.photo,
      email: user.email,
      fullname: user.fullname,
      type: user.type,
      typeName: user.type_user,
      numberInfluencers:user.influencerCaptacao.length,
      token: token,
    };

    return result;
  }
}
