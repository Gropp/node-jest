import { Request } from 'express'
import { makeMockResponse } from '../mocks/mockResponse';
import { UsersController } from "./usersController";

describe('Users Controller', ()=>{
  //instancia a classe UsersController
  //Arrange
  const usersController = new UsersController();

  //criando um mock da request - sendo um conjunto vazio
  const mockRequest = {} as Request
  const mockResponse = makeMockResponse()

  //Act - listar usuarios
  
  it('Deve listar os nossos usuários', ()=> {
    usersController.listarUsuario(mockRequest, mockResponse)

    //Assert - respostas esperadas
    //que o status seja OK - 200
    //e que retorn um array de tamanho 4
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toHaveLength(4)
  })

  //Act - criar novo usuario
  it('Deve criar um novo usuário', ()=> {
    mockRequest.body = {
      name: 'Novo usuário'
    }

    usersController.criarUsuario(mockRequest, mockResponse)

    //Assert - respostas esperadas
    //que o estado seja OK - 201 neste caso
    //e que retorne uma mensagem (por a mensagem)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Novo usuário criado`})
  })

  //Act - usuario em branco
  it('Não deve criar um usuário com o nome em branco', () => {
    mockRequest.body = {
      name: ''
    }

    usersController.criarUsuario(mockRequest, mockResponse)

    //Assert - respostas esperadas
    //que o estado seja de erro - 403
    //erro
    expect(mockResponse.state.status).toBe(403)
    expect(mockResponse.state.json).toMatchObject({mensagem: 'Não é possível criar usuários sem um nome'})
  })
})