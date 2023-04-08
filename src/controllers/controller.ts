import { Request, Response } from "express";
import { insertMovie, updateMovie } from "../protocols/movies.protocols.js";
import services from "../services/service.js"
import repository from "../repositories/movie.respository.js"

async function getAll(req: Request, res: Response){
    try {
        const movies = await services.getAll()

        res.send(movies)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function postMovie(req: Request, res: Response){

    const movie = req.body as insertMovie

    try {
        await services.postMovie(movie)
        return res.sendStatus(201)
        
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function attMovie(req: Request, res: Response){
    const movie = req.body as updateMovie

    try {

        const {rowCount} = await repository.findById(movie.id)
        if(!rowCount) return res.sendStatus(404)

        await services.attMovie(movie)

        return res.sendStatus(200)
        
    } catch (error) {
        res.status(500).send(error.message)
    }

}

export default {
    getAll,
    postMovie,
    attMovie
}