import app, { init } from "../../src/app";
import supertest from "supertest";
import { cleanDb } from "../helpers";
import { createGender } from "../factories/genders.factories";
import { disconnectDb } from "@/config/database";

const server = supertest(app)

beforeAll(async () => {
  await init()
})

beforeEach(async () => {
  await cleanDb()
})

afterAll(async () => {
  await disconnectDb()
})

describe('GET /genders', () => {
  it('It should respond with a empty array when there are no genders created', async () => {
    const response = await server.get('/genders')

    expect(response.status).toBe(200)
    expect(response.body).toEqual([])
  })

  it('It should respond with status 200 and a array with existing genders data', async () => {
    const gender = await createGender()

    const response = await server.get('/genders')

    expect(response.status).toBe(200)
    expect(response.body).toEqual([{
      id: gender.id,
      name: gender.name
    }])
  })

})