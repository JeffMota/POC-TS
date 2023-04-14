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

async function postMovie(movie: insertMovie): Promise<void> {
  const { name, plataform, gender, watched, note, resume } = movie

  // await db.query(`
  //       INSERT INTO movies (name, plataform, gender, watched, note, resume) VALUES ($1, $2, $3, $4, $5, $6);
  //   `, [name, plataform, gender, watched, note, resume])
}

async function attMovie(movie: updateMovie, id: number): Promise<void> {
  const { watched, note, resume } = movie

  // await db.query(`
  //       UPDATE movies SET watched = $1, note = $2, resume = $3 WHERE id = $4;
  //   `,
  //   [watched, note, resume, id]
  // )
}

async function deleteMovie(id: number): Promise<void> {
  // await db.query(`
  //       DELETE FROM movies WHERE id = $1;
  //   `,
  //   [id]
  // )
}

export default {
  getAll,
  postMovie,
  findByGender,
  findByPlataform,
  attMovie,
  deleteMovie
}