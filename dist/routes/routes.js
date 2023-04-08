import { Router } from "express";
import controller from "../controllers/controller.js";
import validateSchema from "../middlewares/validateSchemas.js";
import { movieSchema } from "../schemas/movies.schemas.js";
var router = Router();
router.get("/movies", controller.getAll);
router.post("/movies", validateSchema(movieSchema), controller.postMovie);
export default router;
