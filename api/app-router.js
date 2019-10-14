const express = require('express');
const router = express.Router();
const App = require('./app-model.js');

const restricted = require('../auth/restricted-middleware.js');

module.exports = router;

router.post('/register', (req, res) => {
    const user = req.body;
    App.register(user)
        .then(user => {
            res.status(201).json(user)
        })
        .catch(err => {
            res.status(500).json(err);
        });
});