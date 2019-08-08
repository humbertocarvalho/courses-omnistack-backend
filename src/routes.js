const express = require('express');
const DevController = require('./controllers/Dev');

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.send('Hello world');
});

routes.post('/devs', DevController.store);

module.exports = routes;
