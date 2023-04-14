import prisma from "../config/database.js";

async function getAllGenders() {
  return await prisma.genders.findMany();
}

async function createGender(data) {
  await prisma.genders.create({
    data
  })
}

export default {
  getAllGenders,
  createGender
}