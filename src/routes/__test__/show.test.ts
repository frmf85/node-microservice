import request from 'supertest';
import { app } from '../../app';

it('returns a 404 if the store is not found', async () => {
  const id = 10000;
  await request(app).get(`/api/stores/${id}`).send().expect(404);
});

it('returns the store if the store is found', async () => {
  const name = 'test';
  const type = 'AUCTION_HOUSE';
  const userId = "1";
  const description = "test description 1";
  const visibility = "PUBLIC";

  //Insert
  const response = await request(app)
    .post('/api/stores') //token is missing
    .send({
      name,
      type,
      description,
      visibility,
      userId
    })
    .expect(201);

  // Get  
  const storeResponse = await request(app)
    .get(`/api/stores/${response.body.id}`)
    .send()
    .expect(200);

  //expect
  expect(storeResponse.body.name).toEqual(name);
  expect(storeResponse.body.type).toEqual(type);
  expect(storeResponse.body.description).toEqual(description);
  expect(storeResponse.body.visibility).toEqual(visibility);
  expect(storeResponse.body.userId).toEqual(userId);
});
