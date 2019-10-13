const express = require('express')
const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send({ message: "Welcome to Authenticating and Testing" })
})

module.exports = server;