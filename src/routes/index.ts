import { Router } from "express";
import moviesRouter from "./movies.routes";
import gendersRouter from "./genders.routes";
import plataformsRouter from "./plataform.routes";

const router = Router()

router.use('/movies', moviesRouter)
router.use('/genders', gendersRouter)
router.use('/plataforms', plataformsRouter)

export default router