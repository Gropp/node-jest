//controlador para a criação de usuarios
import { Request, Response } from "express"
import { database } from "../database"

export class UsersController {
    criarUsuario (request:Request, response:Response):Response {
        //descontroi o body
        const { name } = request.body
        //localizar o erro
        //console.log(body)

        //validacao para nao incluir um usuario vazio
        //como a string em javascript é um array, podemos testar o tamanho do array
        if(name.length < 1) {
            return response.status(403).json({'mensagem':'Não é possivel criar usuário sem nome'})
        }

        //fazemos um apend no array
        database.push(name)
        return response.status(201).json({'mensagem': `Usuário ${name} criado com sucesso!`})
    }

    listarUsuario (request: Request, response: Response): Response {
        return response.status(200).json(database)
    }
}