import express, { json } from "express"
import { connectDb, disconnectDb } from "./config/database";
// import { loadEnv } from "./config/envs"
import router from "./routes/index"
import dotenv from "dotenv-flow"
import cors from "cors"
// import 'reflect-metadata'

// if (process.env.NODE_ENV === 'test') {
//   console.log('ambiente de teste')
//   dotenv.config({ path: '.env.test' })
// }

// loadEnv();

dotenv.config()


const app = express()
app.use(json())
app.use(cors())
app.use(router)

export async function init() {
  connectDb()
  return Promise.resolve(app)
}

export async function close() {
  await disconnectDb()
}

export default app