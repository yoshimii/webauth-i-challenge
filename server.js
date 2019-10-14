const express = require('express')
const server = express();
const appRouter = require('./api/app-router.js')

server.use(express.json())
server.use('/api', appRouter)

server.get('/', (req, res) => {
    res.send({ message: "Welcome to Authenticating and Testing" })
})

module.exports = server;