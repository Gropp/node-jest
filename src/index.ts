//arquivo com configuracoes essenciais para o servidor

import express from "express";
import { routes } from "./routes";

const port = 5000

//instancia o express
const server = express();
//o javascript é single thread, entao a ordem da coisas importa
//tem que habilitar o json antes de habilitar as rotas!!!!
//habilita o servidor para ler arquivos json
server.use(express.json())
//trazer o componente routes para que o servidor use as rotas
server.use(routes)
//servidor esta ouvindo a porta 5000
server.listen(port, () => {
    console.log(`Servidor port: ${port}`)
})
