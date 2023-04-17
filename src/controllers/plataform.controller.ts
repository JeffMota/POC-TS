import { Request, Response } from "express";
import { insertPlataform } from "../protocols/movies.protocols";
import plataformServices from "../services/plataforms.services";

async function getAll(req: Request, res: Response) {
  try {
    const plataforms = await plataformServices.getAll()
    res.send(plataforms)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createPlat(req: Request, res: Response) {
  const data = req.body as insertPlataform

  try {
    await plataformServices.createPlat(data)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function deletePlat(req: Request, res: Response) {
  const id = Number(req.params.id)
  if (!id) return res.sendStatus(400)

  try {
    const plat = await plataformServices.getById(id)
    if (!plat) return res.sendStatus(404)

    await plataformServices.deletePlat(id)
    res.sendStatus(202)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default {
  getAll,
  createPlat,
  deletePlat
}