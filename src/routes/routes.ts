import { Router } from "express";
import controller from "../controllers/controller.js";
import validateSchema from "../middlewares/validateSchemas.js";
import { movieSchema, movieUpdateSchema } from "../schemas/movies.schemas.js";

const router = Router()

router.get("/movies", controller.getAll)
router.post("/movies", validateSchema(movieSchema), controller.postMovie)
router.put("/movies/:id", validateSchema(movieUpdateSchema), controller.attMovie)
router.delete("/movies/:id", controller.deleteMovie)

export default router