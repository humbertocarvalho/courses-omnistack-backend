const express = require('express');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.send('Hello world');
});

routes.post('/devs', (request, respose) => {
  console.log(request.body);
  return respose.send({ ok: true });
});

module.exports = routes;
