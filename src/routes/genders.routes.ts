import { Router } from "express";
import gendersController from "../controllers/genders.controller";
import validateSchema from "../middlewares/validateSchemas";
import { genderSchema } from "../schemas/gender.schemas";

const gendersRouter = Router()

gendersRouter.get("/", gendersController.getAllGenders)
gendersRouter.post("/", validateSchema(genderSchema), gendersController.createGender)
gendersRouter.delete("/:id", gendersController.deleteGender)

export default gendersRouter