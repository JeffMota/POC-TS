import { Router } from "express";
import validateSchema from "../middlewares/validateSchemas";
import { plataformSchema } from "../schemas/plataform.schemas";
import plataformController from "../controllers/plataform.controller";

const plataformsRouter = Router()

plataformsRouter.get("/", plataformController.getAll)
plataformsRouter.post("/", validateSchema(plataformSchema), plataformController.createPlat)
plataformsRouter.delete("/:id", plataformController.deletePlat)

export default plataformsRouter