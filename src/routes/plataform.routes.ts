import { Router } from "express";
import validateSchema from "../middlewares/validateSchemas.js";
import { plataformSchema } from "../schemas/plataform.schemas.js";
import plataformController from "../controllers/plataform.controller.js";

const plataformsRouter = Router()

plataformsRouter.get("/", plataformController.getAll)
plataformsRouter.post("/", validateSchema(plataformSchema), plataformController.createPlat)
plataformsRouter.delete("/:id", plataformController.deletePlat)

export default plataformsRouter