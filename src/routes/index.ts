import { Router } from "express";
import moviesRouter from "./movies.routes.js";
import gendersRouter from "./genders.routes.js";
import plataformsRouter from "./plataform.routes.js";

const router = Router()

router.use('/movies', moviesRouter)
router.use('/genders', gendersRouter)
router.use('/plataforms', plataformsRouter)

export default router