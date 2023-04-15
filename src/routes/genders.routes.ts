import { Router } from "express";
import gendersController from "../controllers/genders.controller.js";
import validateSchema from "../middlewares/validateSchemas.js";
import { genderSchema } from "../schemas/gender.schemas.js";

const gendersRouter = Router()

gendersRouter.get("/", gendersController.getAllGenders)
gendersRouter.post("/", validateSchema(genderSchema), gendersController.createGender)
gendersRouter.delete("/:id", gendersController.deleteGender)

export default gendersRouter