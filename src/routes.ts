import { Router } from 'express'
import { UsersController } from './controllers/usersController'

const routes = Router()
//agora o userController é uma classe, entao precisa instanciar
const usersController = new UsersController()

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