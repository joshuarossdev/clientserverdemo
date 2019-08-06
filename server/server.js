const express = require('express');
const server = express();
const cors = require('cors');

const names = [{
  "name": "Bob"
}, {
  "name": "John"
}, {
  "name": "Mary"
}]

const favFoods = [
  {
    "food": "mac n cheese",
    "age": "4"
  },
  {
    "food": "ketchup",
    "age": "6"
  },
  {
    "food": "sushi",
    "age": "21"
  }
]

server.use( cors() );

server.get('/names', (request, response)=>{
response.send(names)
});

server.get('/food', (request, response)=>{
response.send(favFoods)
});

server.listen(3001)
console.log('server listening');
