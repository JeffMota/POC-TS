import prisma from "../src/config/database.js";

async function main() {
  await prisma.movies.createMany({
    data: [
      {
        name: "A culpa é das estrelas",
        plataform: "Prime video",
        watched: false,
      },
      {
        name: "Orgulho e preconceito",
        plataform: "Netflix",
        watched: false,
      },
      {
        name: "A proposta",
        plataform: "Prime video",
        watched: false,
      },
      {
        name: "Jane Eyre",
        plataform: "Netflix",
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