import { Router } from "express";
import moviesController from "../controllers/movies.controller.js";
import validateSchema from "../middlewares/validateSchemas.js";
import { movieSchema, movieUpdateSchema } from "../schemas/movies.schemas.js";
import gendersController from "../controllers/genders.controller.js";

const router = Router()

router.get("/movies", moviesController.getAll)
router.post("/movies", validateSchema(movieSchema), moviesController.postMovie)
router.put("/movies/:id", validateSchema(movieUpdateSchema), moviesController.attMovie)
router.delete("/movies/:id", moviesController.deleteMovie)

router.get("/genders", gendersController.getAllGenders)
router.post("/genders", gendersController.createGender)

export default router