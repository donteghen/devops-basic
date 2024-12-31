const request = require('supertest');
const express = require('express');

const app = express();
app.use(express.json());
app.get('/items', (req, res) => res.json([]));

test('GET /items should return empty array', async () => {
  const res = await request(app).get('/items');
  expect(res.statusCode).toBe(200);
  expect(res.body).toEqual([]);
});
