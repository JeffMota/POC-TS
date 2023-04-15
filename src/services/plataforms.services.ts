import { plataforms } from "@prisma/client"
import { insertPlataform } from "../protocols/movies.protocols.js"
import plataformRepository from "../repositories/plataform.repository.js"

async function getAll(): Promise<plataforms[]> {
  return await plataformRepository.getAll()
}

async function createPlat(data: insertPlataform): Promise<void> {
  await plataformRepository.getAll()
}
async function deletePlat(id: number): Promise<void> {
  await plataformRepository.getAll()
}

export default {
  getAll,
  createPlat,
  deletePlat
}