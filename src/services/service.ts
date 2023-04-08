import { insertMovie, updateMovie } from "../protocols/movies.protocols.js"
import repository from "../repositories/movie.respository.js"
import { Movie } from "../protocols/movies.protocols.js"

async function getAll(gender, plataform){
    if(gender) {
        const {rows} = await repository.findBy( "gender", gender)
        const movies = rows
        return movies
    }
    if(plataform) {
        const {rows} = await repository.findBy( "plataform", plataform)
        const movies = rows
        return movies
    }

    const movies = await repository.getAll()
    return movies
}

async function postMovie(movie: insertMovie): Promise<void>{
    await repository.postMovie(movie)
}

async function attMovie(movie: updateMovie, id:number): Promise<void>{
    await repository.attMovie(movie, id)
}

async function deleteMovie(id:number){
    await repository.deleteMovie(id)
}

export default {
    getAll,
    postMovie,
    attMovie,
    deleteMovie
}