import express, { json } from "express"
import router from "./routes/index.js"

const server = express()
server.use(json())

server.use(router)

server.listen(5000, () => console.log("Running on port 5000..."))