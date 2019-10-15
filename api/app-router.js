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
                req.session.user = userLogin;
                res.status(201).json({ message: `Welcome to the ${userLogin.username} castle.` })
            } else {
                res.status(401).json({ message: 'invalid credentials' });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
})

router.get('/restricted/users', (req, res) => {
    App.getUsers().then(users => {
        res.status(200).json(users)
    })
})

router.get('/logout', (req, res) => {
    if(req.session) {
        req.session.destroy(err => {
            if(err) {
                res.json({ message: "could not log user out"})
            } else {
                res.status(200).json({ message: "logout was successful" })
            }
        })
    } else {
        res.status(200).json({ message: "App session ended successfully" })
    }
})