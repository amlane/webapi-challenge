const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send("Let's build an API!")
})

module.exports = server;