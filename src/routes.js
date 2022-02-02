const express = require('express');
const users = require('./controllers/users');
const login = require('./controllers/login');

const routes = express();

routes.get('/usuarios', users.testeUsers);
routes.get('/login', login.testeLogin);

module.exports = routes;