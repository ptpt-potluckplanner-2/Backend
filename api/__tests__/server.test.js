const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
  it("Server responds with 200 status code", async () => {
    const response = await request(server).get("/");
    expect(response.status).toBe(200);
  });
  it("Server catch all 404 on unknown resource", async () => {
    const response = await request(server).get(`/${Math.random()}`);
    expect(response.status).toBe(404);
  });
})
