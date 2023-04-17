import { prisma } from "../../src/config/database";

export async function createPlataform() {
  return await prisma.plataforms.create({
    data: {
      name: 'Netflix'
    }
  })
}