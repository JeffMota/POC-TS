import { prisma } from "../src/config/database";

export async function cleanDb() {
  await prisma.gendersOnMovies.deleteMany({})
  await prisma.movies.deleteMany({})
  await prisma.genders.deleteMany({})
  await prisma.plataforms.deleteMany({})


}

