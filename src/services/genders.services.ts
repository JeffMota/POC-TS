import { insertGender } from "../protocols/movies.protocols"
import genderRepository from "../repositories/gender.repository"

async function getAllGenders() {
  return await genderRepository.getAllGenders()
}

async function createGender(data: insertGender) {
  await genderRepository.createGender(data)
}

async function getGenderById(id: number) {
  return await genderRepository.getGenderById(id)
}

async function deleteGender(id: number) {
  await genderRepository.deleteGender(id)
}

export default {
  getAllGenders,
  createGender,
  deleteGender,
  getGenderById
}