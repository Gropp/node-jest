"use strict";
//arquivo com configuracoes essenciais para o servidor
exports.__esModule = true;
var express_1 = require("express");
var routes_1 = require("./routes");
var port = 5000;
//instancia o express
var server = (0, express_1["default"])();
//o javascript é single thread, entao a ordem da coisas importa
//tem que habilitar o json antes de habilitar as rotas!!!!
//habilita o servidor para ler arquivos json
server.use(express_1["default"].json());
//trazer o componente routes para que o servidor use as rotas
server.use(routes_1.routes);
//servidor esta ouvindo a porta 5000
server.listen(port, function () {
    console.log("Servidor port: ".concat(port));
});
