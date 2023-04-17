import app, { init } from "../../src/app"
import { cleanDb } from "../helpers"
import supertest from 'supertest'
import { createPlataform } from "../factories/plataform.factories"
import { disconnectDb, prisma } from "../../src/config/database"

beforeAll(async () => {
  await init()
})

beforeEach(async () => {
  await cleanDb()
})

afterAll(async () => {
  await disconnectDb()
})

const server = supertest(app)

describe('GET /plataforms', () => {
  it('It should respond with a empty array when there are no plataforms created', async () => {
    const response = await server.get('/plataforms')

    expect(response.status).toBe(200)
    expect(response.body).toEqual([])
  })

  it('It should respond with status 200 and with existing plataforms data', async () => {

    const plataform = await createPlataform()

    const response = await server.get('/plataforms')

    expect(response.status).toBe(200)
    expect(response.body).toEqual([{
      id: plataform.id,
      name: plataform.name
    }])

  })

}
)

describe('POST /plataforms', () => {
  it("It should respond with status 400 when body is not given", async () => {
    const response = await server.post('/plataforms')

    expect(response.status).toBe(400)
  })

  it("It should respond with status 400 when body given is not valid", async () => {
    const response = await server.post('/plataforms').send({ name: '' })

    expect(response.status).toBe(400)
  })

  describe('When body is valid', () => {
    it('It should respond with status 201', async () => {
      const response = await server.post('/plataforms').send({ name: "Netflix" })

      expect(response.status).toBe(201)
    })

    it('It should insert a new plataform on database', async () => {

      const beforeCount = await prisma.plataforms.count()

      await server.post('/plataforms').send({ name: "Netflix" })

      const afterCount = await prisma.plataforms.count()

      expect(beforeCount).toBe(0);
      expect(afterCount).toBe(1);
    })
  })

})

describe('DELETE /plataforms/:id', () => {
  it('It should respond with status 400 when no id was given', async () => {
    const response = await server.delete('/plataforms/')

    expect(response.status).toBe(404)
  })
  it('It should respond with status 404 when given plataform id do not exist', async () => {
    const response = await server.delete('/plataforms/1')

    expect(response.status).toBe(404)
  })
})