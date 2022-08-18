"use strict";
exports.__esModule = true;
exports.UsersController = void 0;
var database_1 = require("../database");
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.criarUsuario = function (request, response) {
        //descontroi o body
        var name = request.body.name;
        //localizar o erro
        //console.log(body)
        //validacao para nao incluir um usuario vazio
        //como a string em javascript é um array, podemos testar o tamanho do array
        if (name.length < 1) {
            return response.status(403).json({ 'mensagem': 'Não é possivel criar usuário sem nome' });
        }
        //fazemos um apend no array
        database_1.database.push(name);
        return response.status(201).json({ 'mensagem': "Usu\u00E1rio ".concat(name, " criado com sucesso!") });
    };
    UsersController.prototype.listarUsuario = function (request, response) {
        return response.status(200).json(database_1.database);
    };
    return UsersController;
}());
exports.UsersController = UsersController;
