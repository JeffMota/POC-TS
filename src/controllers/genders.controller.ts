import { genders } from "@prisma/client";
import { Request, Response } from "express";
import { insertGender } from "../protocols/movies.protocols.js";
import gendersServices from "../services/genders.services.js";

async function getAllGenders(req: Request, res: Response) {
  try {
    const genders = await gendersServices.getAllGenders() as genders[]
    res.send(genders)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createGender(req: Request, res: Response) {
  const data = req.body as insertGender
  if (!data) return res.sendStatus(400)

  try {
    await gendersServices.createGender(data)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function deleteGender(req: Request, res: Response) {
  const id = Number(req.params.id)
  try {

    const gender = await gendersServices.getGenderById(id)
    if (!gender) return res.sendStatus(404)

    await gendersServices.deleteGender(id)
    res.sendStatus(202)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default {
  getAllGenders,
  createGender,
  deleteGender
}