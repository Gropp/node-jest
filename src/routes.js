import { Router } from 'express'
import { usersController } from './controllers/usersController.js'

const routes = Router()

//o caminho das rotas sao importantes para a organizacao e acesso aos dados
//faz um get no servidor e retorna no formato json
//chama o controller que  tem a responsabilidade de acessar as bases
routes.get('/users', usersController.listarUsuario)

//faz um post - sempre cadastra algo
//o request é o body do que sera incluido
//chamo o controller que tem a responsabilidade de acessar as bases
routes.post('/users', usersController.criarUsuario)

//GET - ler dados
//POST - criar dados
//PUT/PATCH - editar dados
//DELETE - apagar dados

//STATUS CODE/ RESPONSE CODE
//200 E 201 - SUCESSO
//404 - PAGINA NAO ENCONTRADA

export { routes }