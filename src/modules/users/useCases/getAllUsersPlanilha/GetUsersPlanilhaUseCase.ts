import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

async function GetUsersPlanilhaUseCase() {

    try {
      const users = await prisma.user.findMany({});

      const XLSX = require("xlsx");
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(users);
      XLSX.utils.book_append_sheet(workbook, worksheet, "UsersData");
      XLSX.writeFile(workbook, "users_data.xlsx");
    } catch (error) {
      console.error("Erro ao exportar para a planilha:", error);
    } finally {
      await prisma.$disconnect();
    }
  }


GetUsersPlanilhaUseCase();
