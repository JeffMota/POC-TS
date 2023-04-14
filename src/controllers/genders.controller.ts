import { Request, Response } from "express";
import gendersServices from "../services/genders.services.js";

async function getAllGenders(req: Request, res: Response) {
  try {
    const genders = await gendersServices.getAllGenders()
    res.send(genders)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

async function createGender(req: Request, res: Response) {
  const data = req.body
  if (!data) return res.sendStatus(400)

  try {
    await gendersServices.createGender(data)
    res.sendStatus(201)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

export default {
  getAllGenders,
  createGender
}