// import { QueryResult } from "pg";
// import { db } from "../config/database.js";
import { movies } from "@prisma/client";
import prisma from "../config/database.js";
import { insertMovie, updateMovie } from "../protocols/movies.protocols.js";

async function getAll(): Promise<movies[]> {
  return await prisma.movies.findMany();
}

async function findByGender(gender: string) {
  return prisma.movies.findMany({
    where: {
      gender
    }
  })
}

async function findByPlataform(plataform: string) {
  return prisma.movies.findMany({
    where: {
      plataform
    }
  })
}

async function findById(id: number) {
  return prisma.movies.findMany({
    where: {
      id
    }
  })
}

async function postMovie(data: insertMovie): Promise<void> {
  await prisma.movies.create({
    data
  })
}

async function attMovie(movie: updateMovie, id: number): Promise<void> {
  const { watched, note, resume } = movie

  await prisma.movies.update({
    where: {
      id
    },
    data: {
      watched,
      note,
      resume
    }
  })
}

async function deleteMovie(id: number): Promise<void> {
  await prisma.movies.delete({
    where: {
      id
    }
  })
}

export default {
  getAll,
  postMovie,
  findById,
  findByGender,
  findByPlataform,
  attMovie,
  deleteMovie
}