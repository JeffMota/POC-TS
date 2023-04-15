import { plataforms } from "@prisma/client";
import prisma from "../config/database.js";
import { insertPlataform } from "../protocols/movies.protocols.js";

async function getAll(): Promise<plataforms[]> {
  return await prisma.plataforms.findMany()
}

async function createPlat(data: insertPlataform): Promise<void> {
  await prisma.plataforms.create({
    data
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
  deletePlat
}