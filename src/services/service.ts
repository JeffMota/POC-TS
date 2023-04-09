import { insertMovie, updateMovie } from "../protocols/movies.protocols.js"
import repository from "../repositories/movie.respository.js"

async function getAll(gender:string, plataform:string){
    if(gender) {
        const {rows: movies} = await repository.findBy( "gender", gender)
        return movies
    }
    if(plataform) {
        const {rows : movies} = await repository.findBy( "plataform", plataform)
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

async function deleteMovie(id:number): Promise<void>{
    await repository.deleteMovie(id)
}

export default {
    getAll,
    postMovie,
    attMovie,
    deleteMovie
}