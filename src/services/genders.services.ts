import genderRepository from "../repositories/gender.repository.js"

async function getAllGenders() {
  return await genderRepository.getAllGenders()
}

async function createGender(data) {
  await genderRepository.createGender(data)
}

export default {
  getAllGenders,
  createGender
}