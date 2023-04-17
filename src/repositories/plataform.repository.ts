import { plataforms } from "@prisma/client";
import { prisma } from "../config/database";
import { insertPlataform } from "../protocols/movies.protocols";

async function getAll(): Promise<plataforms[]> {
  return await prisma.plataforms.findMany()
}

async function createPlat(data: insertPlataform): Promise<void> {
  await prisma.plataforms.create({
    data
  })
}

async function getById(id: number) {
  return await prisma.plataforms.findFirst({
    where: {
      id
    }
  })
}

async function deletePlat(id: number): Promise<void> {
  await prisma.plataforms.delete({
    where: {
      id
    }
  })
}

export default {
  getAll,
  createPlat,
  deletePlat,
  getById
}