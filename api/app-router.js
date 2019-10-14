const express = require('express');
const router = express.Router();
const App = require('./app-model.js');

const bcrypt = require('bcryptjs');
const restricted = require('../auth/restricted-middleware.js');

module.exports = router;

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash;

    App.register(user)
        .then(newUser => {
            res.status(201).json(req.body)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    App.findBy({ username })
        .then(userLogin => {
            if(userLogin && bcrypt.compareSync(password, userLogin.password)){
                res.status(201).json({ message: `Welcome to the ${userLogin.username} castle.` })
            } else {
                res.status(401).json({ message: 'invalid credentials' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
})

router.get('/users', restricted, (req, res) => {
    App.getUsers().then(users => {
        res.status(200).json(users)
    })
})