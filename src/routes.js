const express = require('express');
const users = require('./controllers/users');
const login = require('./controllers/login');

const routes = express();

// cadastro de novo usuario
routes.post('/usuarios', users.cadastrarUsuario);


routes.get('/login', login.testeLogin);

module.exports = routes;