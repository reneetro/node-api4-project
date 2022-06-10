const express = require('express');

const User = require('./user-model');

const router = express.Router();

router.get('/users', (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => next(error));
})

router.post('/register', (req, res, next) => {
    User.create(req.body)
        .then(newUser => {
            res.status(201).json(newUser);
        })
        .catch(error => next(error));
})

router.post('/login', (req, res, next) =>{
    User.login(req.body)
        .then(user => {
            if(user){
                res.status(200).json({message: `Welcome back ${user[0].username}!`})
            } else {
                res.status(404).json({message: 'invalid login'})
            }
        })
        .catch(err => next(err));
})


module.exports = router;