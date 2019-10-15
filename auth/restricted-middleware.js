const express = require('express')
const router = express.Router();
const App = require('../api/app-model');

const bcrypt = require('bcryptjs');


module.exports = function restricted(req, res, next) {
    const { username, password } = req.headers;

    App.findBy({ username })
        .then(userLogin => {
            if(userLogin && bcrypt.compareSync(password, userLogin.password)){
                res.status(201).json({ message: `Welcome to the ${userLogin.username} castle.` })
            } else {
                res.status(401).json({ message: 'invalid credentials' });
            }
        })
        .catch(err => {
            res.status(500).json({ message: "please provide valid credentials" });
        });
};
