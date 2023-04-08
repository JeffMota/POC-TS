import { QueryResult } from "pg";
import { db } from "../config/database.js";
import { insertMovie, Movie, updateMovie } from "../protocols/movies.protocols.js";

async function getAll():Promise<Movie[]>{
    const {rows} = await db.query<Movie>(`
        SELECT * FROM movies;
    `)
    return rows
}

async function findBy(fieldName:string, fieldKey:(string | number)){
    return await db.query<Movie[]>(`
        SELECT * FROM movies WHERE ${fieldName} = $1;
    `,
        [fieldKey]
    )
}

async function postMovie(movie: insertMovie): Promise<void>{
    const {name, plataform, gender, watched, note, resume} = movie

    await db.query(`
        INSERT INTO movies (name, plataform, gender, watched, note, resume) VALUES ($1, $2, $3, $4, $5, $6);
    `, [name, plataform, gender, watched, note, resume])
}

async function attMovie(movie:updateMovie, id:number): Promise<void>{
    const {watched, note, resume} = movie 

    await db.query(`
        UPDATE movies SET watched = $1, note = $2, resume = $3 WHERE id = $4;
    `,
        [watched, note, resume, id]
    )
}

async function deleteMovie(id: number):Promise<void>{
    await db.query(`
        DELETE FROM movies WHERE id = $1;
    `,
        [id]
    )
}

export default{
    getAll,
    postMovie,
    findBy,
    attMovie,
    deleteMovie
}