import { insertMovie, updateMovie } from "../protocols/movies.protocols.js"
import repository from "../repositories/movie.respository.js"

async function getAll(gender: string, plataform: string) {
  if (gender !== 'undefined') {

    const movies = await repository.findByGender(gender)
    return movies
  }
  if (plataform !== 'undefined') {
    const movies = await repository.findByPlataform(plataform)
    return movies
  }

  const movies = await repository.getAll()
  return movies
}

async function findById(id: number) {
  return await repository.findById(id)
}

async function postMovie(movie: insertMovie): Promise<void> {
  const movieInfo = await repository.postMovie(movie)

  const genders = movie.genders
  for (let i of genders) {
    await repository.addGenders(movieInfo.id, i)

  }
}

async function attMovie(movie: updateMovie, id: number): Promise<void> {
  await repository.attMovie(movie, id)
}

async function deleteMovie(id: number): Promise<void> {
  await repository.deleteMovie(id)
}

export default {
  getAll,
  postMovie,
  attMovie,
  findById,
  deleteMovie
}