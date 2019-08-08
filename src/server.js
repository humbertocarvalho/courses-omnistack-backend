const express = require('express');
const server = express();

server.get('/', (request, response) => {
  return response.send('Hello world');
});

server.listen(3333);
