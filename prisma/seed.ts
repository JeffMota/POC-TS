import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
  await prisma.plataforms.createMany({
    data: [
      { name: "Netflix" },
      { name: "Prime Video" },
      { name: "HBOMAX" },
    ]
  })

  await prisma.movies.createMany({
    data: [
      {
        name: "A culpa é das estrelas",
        plataformId: 2,
        watched: false,
      },
      {
        name: "Orgulho e preconceito",
        plataformId: 1,
        watched: false,
      },
      {
        name: "A proposta",
        plataformId: 2,
        watched: false,
      },
      {
        name: "Jane Eyre",
        plataformId: 3,
        watched: false,
      },
    ]
  })

  await prisma.genders.createMany({
    data: [
      { name: 'ação' },
      { name: 'aventura' },
      { name: 'comédia' },
      { name: 'romance' },
    ]
  })

  await prisma.gendersOnMovies.createMany({
    data: [
      { movieId: 1, genderId: 4 },
      { movieId: 2, genderId: 4 },
      { movieId: 3, genderId: 3 },
      { movieId: 3, genderId: 4 },
      { movieId: 4, genderId: 4 },
    ]
  })
}

main()
  .then(() => {
    console.log("Registro feito com sucesso!")
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect()
  })