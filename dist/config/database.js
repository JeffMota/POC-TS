import pg from "pg";
var Pool = pg.Pool;
var configDatabase = {
    connectionString: "postgres://postgres:248569731@localhost:5432/poc"
};
export var db = new Pool(configDatabase);
