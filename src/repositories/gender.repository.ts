import { insertGender } from "@/protocols/movies.protocols";
import { prisma } from "../config/database";

async function getAllGenders() {
  return await prisma.genders.findMany();
}

async function createGender(data: insertGender) {
  await prisma.genders.create({
    data
  })
}

async function getGenderById(id: number) {
  return await prisma.genders.findFirst({
    where: {
      id
    }
  })
}

async function deleteGender(id: number) {
  await prisma.genders.delete({
    where: {
      id
    }
  })
}

export default {
  getAllGenders,
  createGender,
  getGenderById,
  deleteGender
}