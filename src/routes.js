"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var usersController_1 = require("./controllers/usersController");
var routes = (0, express_1.Router)();
exports.routes = routes;
//agora o userController é uma classe, entao precisa instanciar
var usersController = new usersController_1.UsersController();
//o caminho das rotas sao importantes para a organizacao e acesso aos dados
//faz um get no servidor e retorna no formato json
//chama o controller que  tem a responsabilidade de acessar as bases
routes.get('/users', usersController.listarUsuario);
//faz um post - sempre cadastra algo
//o request é o body do que sera incluido
//chamo o controller que tem a responsabilidade de acessar as bases
routes.post('/users', usersController.criarUsuario);
