import request from 'supertest';
import app from '../../src/interfaces/http/app';

describe("GET /api/pokemons", () => {
  it("should return a list of pokemons", async () => {
    const res = await request(app).get("/api/pokemons");
    expect(res.status).toBe(200);
    expect(res.body.results).toBeDefined();
  });
});
