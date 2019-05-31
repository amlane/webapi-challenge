const express = require('express');

const projectRouter = require('./ProjectRouter.js');

const server = express();

server.use(express.json());
server.use(logger);

server.get('/', (req, res) => {
    res.send("Let's build an API!")
})

server.use('/api/projects', projectRouter);

function logger(req, res, next){
    const time = new Date().toISOString();
    console.log(`A ${req.method} was made to ${req.url} at ${time}`);
    next();
}

module.exports = server;