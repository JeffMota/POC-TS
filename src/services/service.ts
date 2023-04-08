import { insertMovie, updateMovie } from "../protocols/movies.protocols.js"
import repository from "../repositories/movie.respository.js"

async function getAll(){
    const movies = await repository.getAll()
    return movies
}

async function postMovie(movie: insertMovie): Promise<void>{
    await repository.postMovie(movie)
}

async function attMovie(movie: updateMovie): Promise<void>{

    await repository.attMovie(movie)
}

export default {
    getAll,
    postMovie,
    attMovie
}