const express = require('express')
const server = express();
const appRouter = require('./api/app-router.js')
const restricted = require('./auth/restricted-middleware.js');

const session  = require('express-session')

const sessionConfig = {
    name: 'coconut',//defaults to sid
    secret: 'keep it secret, keep it safe!',
    cookie: {
        maxAge: 1000 * 30,
        secure: false,// true in production
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false, // GDPR laws against setting cookies automatically
};

server.use(express.json());
server.use(session(sessionConfig));

server.use('/api', appRouter)
server.use('/api/restricted', restricted)


server.get('/', (req, res) => {
    res.send({ message: "Welcome to Authenticating and Testing" })
})

module.exports = server;