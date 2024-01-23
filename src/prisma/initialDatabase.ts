const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedDatabase() {
  try {
    // Crie instâncias dos modelos e insira dados no banco
    await prisma.typeUser.createMany({
      data: [
        { id: 1, type: "Administrador" },
        { id: 2, type: "Captação" },
        { id: 3, type: "Grupos" },
        { id: 4, type: "TI" },
      ],
    });

    await prisma.status.createMany({
      data: [
        {id: 1, status: "Em contato"},
        {id: 2, status: "Negociando"},
        {id: 3, status: "Sem sucesso"},
        {id: 4, status: "Fechado"},
      ],
    });

    await prisma.user.createMany({
      data: [
        { email: "maycon@gmail.com", 
        fullname: "Maycon", 
        photo: "https://scontent-for1-1.cdninstagram.com/v/t51.2885-19/410413009_297064159989268_5704336826426402734_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=fT0ikBupFYsAX_1-ML5&_nc_ht=scontent-for1-1.cdninstagram.com&oh=00_AfBF0v4J6T9CiDDFnVo6Fz5i2STSj4hoTKzisMNbSYTQyA&oe=6583BAAC", 
        type: 3,
        password: "$2a$10$hIH3V7zT6sEU/Pjml.MSBelviprtqUN3pMBs1/VdMuOu05V6y1TxO"
      },
      { email: "luan@gmail.com", 
      fullname: "Luan", 
      photo: "https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg", 
      type: 3,
      password: "$2a$10$hIH3V7zT6sEU/Pjml.MSBelviprtqUN3pMBs1/VdMuOu05V6y1TxO"
    },
    { email: "joaovitor@gmail.com", 
    fullname: "João Vitor", 
    photo: "https://photografos.com.br/wp-content/uploads/2020/09/fotografia-para-perfil.jpg", 
    type: 3,
    password: "$2a$10$hIH3V7zT6sEU/Pjml.MSBelviprtqUN3pMBs1/VdMuOu05V6y1TxO"
  },
    { email: "karol@gmail.com", 
    fullname: "Karol", 
    photo: "https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2018/07/25/5fa43a4a54014.jpeg", 
    type: 3,
    password: "$2a$10$hIH3V7zT6sEU/Pjml.MSBelviprtqUN3pMBs1/VdMuOu05V6y1TxO"
  }   
      ],
    });

    // Feche a conexão com o Prisma
    await prisma.$disconnect();
  } catch (error) {
    console.error("Erro ao adicionar dados iniciais:", error);
  }
}

seedDatabase();
