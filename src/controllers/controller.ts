import { Request, Response } from "express";
import { insertMovie, updateMovie } from "../protocols/movies.protocols.js";
import services from "../services/service.js"
import repository from "../repositories/movie.respository.js"

async function getAll(req: Request, res: Response): Promise<void> {

  const gender = String(req.query.gender)
  const plataform = String(req.query.plataform)

  try {
    const movies = await services.getAll(gender, plataform)

    res.send(movies)

  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function postMovie(req: Request, res: Response): Promise<void> {

  const movie = req.body as insertMovie

  try {
    await services.postMovie(movie)
    res.sendStatus(201)

  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function attMovie(req: Request, res: Response) {
  const att = req.body as updateMovie
  const id = Number(req.params.id)

  try {

    const movie = await repository.findById(id)
    if (!movie) return res.sendStatus(404)

    await services.attMovie(att, id)

    return res.sendStatus(200)

  } catch (error) {
    res.status(500).send(error.message)
  }

}

async function deleteMovie(req: Request, res: Response) {
  const id = Number(req.params.id)

  // const {rowCount} = await repository.findBy("id", id)
  // if(!rowCount) return res.sendStatus(404)

  await services.deleteMovie(id)
  res.sendStatus(200)
}

export default {
  getAll,
  postMovie,
  attMovie,
  deleteMovie
}