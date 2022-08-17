import { Router } from 'express'

const routes = Router()
//definir de onde virao os dados
//teremos um array simulando um BD
//nomes de usuarios
const database = ['Fernando Gropp']

//o caminho das rotas sao importantes para a organizacao e acesso aos dados
//faz um get no servidor e retorna no formato json
routes.get('/users', (request, response) => {
    return response.status(200).json(database)
})

//faz um post - sempre cadastra algo
//o request é o body do que sera incluido
routes.post('/users', (request, response) => {
    //descontroi o body
    const { name } = request.body
    //localizar o erro
    //console.log(body)

    //fazemos um apend no array
    database.push(name)
    return response.status(201).json({'mensagem': `Usuário ${name} criado com sucesso!`})
})


//GET - ler dados
//POST - criar dados
//PUT/PATCH - editar dados
//DELETE - apagar dados

//STATUS CODE/ RESPONSE CODE
//200 E 201 - SUCESSO
//404 - PAGINA NAO ENCONTRADA

export { routes }