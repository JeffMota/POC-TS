// import { QueryResult } from "pg";
// import { db } from "../config/database.js";
import { movies } from "@prisma/client";
import prisma from "../config/database.js";
import { insertMovie, updateMovie } from "../protocols/movies.protocols.js";

async function getAll(): Promise<movies[]> {
  return await prisma.movies.findMany({
    include: {
      genders: {
        select: {
          gender: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  })
}

async function findByGender(gender: string) {
  return prisma.genders.findMany({
    where: {
      name: gender
    },
    include: {
      movies: {
        select: {
          movie: true
        }
      }
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

async function postMovie(movie: insertMovie): Promise<movies> {

  const { name, plataform, watched, note, resume } = movie
  return await prisma.movies.create({
    data: {
      name,
      plataform,
      watched,
      note,
      resume,
    }
  })
}

async function addGenders(movieId: number, genderId: number) {
  await prisma.gendersOnMovies.create({
    data: {
      movieId,
      genderId
    }
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

  await prisma.gendersOnMovies.deleteMany({
    where: {
      movieId: id
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
  deleteMovie,
  addGenders
}