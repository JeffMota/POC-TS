import { Router } from "express";
import moviesController from "../controllers/movies.controller.js";
import validateSchema from "../middlewares/validateSchemas.js";
import { movieSchema, movieUpdateSchema } from "../schemas/movies.schemas.js";

const moviesRouter = Router()

moviesRouter.get("/", moviesController.getAll)
moviesRouter.post("/", validateSchema(movieSchema), moviesController.postMovie)
moviesRouter.put("/:id", validateSchema(movieUpdateSchema), moviesController.attMovie)
moviesRouter.delete("/:id", moviesController.deleteMovie)

export default moviesRouter