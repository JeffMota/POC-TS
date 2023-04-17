import { Router } from "express";
import moviesController from "../controllers/movies.controller";
import validateSchema from "../middlewares/validateSchemas";
import { movieSchema, movieUpdateSchema } from "../schemas/movies.schemas";

const moviesRouter = Router()

moviesRouter.get("/", moviesController.getAll)
moviesRouter.post("/", validateSchema(movieSchema), moviesController.postMovie)
moviesRouter.put("/:id", validateSchema(movieUpdateSchema), moviesController.attMovie)
moviesRouter.delete("/:id", moviesController.deleteMovie)

export default moviesRouter