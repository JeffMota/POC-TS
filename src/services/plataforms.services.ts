import { plataforms } from "@prisma/client"
import { insertPlataform } from "../protocols/movies.protocols"
import plataformRepository from "../repositories/plataform.repository"

async function getAll(): Promise<plataforms[]> {
  return await plataformRepository.getAll()
}

async function createPlat(data: insertPlataform): Promise<void> {
  await plataformRepository.createPlat(data)
}

async function getById(id: number) {
  return await plataformRepository.getById(id)
}

async function deletePlat(id: number): Promise<void> {
  await plataformRepository.deletePlat(id)
}

export default {
  getAll,
  createPlat,
  deletePlat,
  getById
}