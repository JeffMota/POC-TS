import { QueryResult } from "pg";
import { db } from "../config/database.js";
import { insertMovie, Movie, updateMovie } from "../protocols/movies.protocols.js";

async function getAll():Promise<Movie[]>{
    const {rows} = await db.query<Movie>(`
        SELECT * FROM movies;
    `)
    return rows
}

async function findById(id:number): Promise<QueryResult<Movie>>{
    return await db.query<Movie>(`
        SELECT * FROM movies WHERE id = $1;
    `,
        [id]
    )
}

async function postMovie(movie: insertMovie): Promise<void>{
    const {name, plataform, gender, watched, note, resume} = movie

    await db.query(`
        INSERT INTO movies (name, plataform, gender, watched, note, resume) VALUES ($1, $2, $3, $4, $5, $6);
    `, [name, plataform, gender, watched, note, resume])
}

async function attMovie(movie:updateMovie): Promise<void>{
    const {id, watched, note, resume} = movie

    await db.query(`
        UPDATE movies SET watched = $1, note = $2, resume = $3 WHERE id = $4;
    `,
        [watched, note, resume, id]
    )

}

export default{
    getAll,
    postMovie,
    findById,
    attMovie
}