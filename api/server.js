const express = require('express');

const server = express();

server.use(express.json())

const usersRouter = require('./users/user-router');

server.use('/api', usersRouter)

server.get('*', (req, res) => {
    res.send(`<h2>I swear there are users somewhere...</h2>`);
  });

module.exports = server;