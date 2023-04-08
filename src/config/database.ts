import pg from "pg";

const {Pool} = pg

const configDatabase = {
    connectionString: "postgres://postgres:248569731@localhost:5432/poc"
}

export const db = new Pool(configDatabase)