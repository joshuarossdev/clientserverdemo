const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const cred = require('./mysqlcredentials.js');

const db = mysql.createConnection(cred);

const server = express();
const name = [{
  "name": "jase"
}, {
  "name": "nick"
}, {
  "name": "Alex"
}];
const favFood = [{
  "favFood": "burrito",
  "ageDiscovered": 15
}];
server.use(cors());
server.get("/name", (request, response) => {
  response.send(name);
});
server.get("/favFood", (request, response) => {
  response.send(favFood);
});

server.get('/names', (request, response)=>{
  db.connect( ()=>{
    db.query("SELECT * FROM `names2`", (error, data, fields)=>{
      if (!error){
        response.send(data);
      }
    })
  })
});

server.listen(3001, () => {
  console.log("Server loaded successfully");
});
