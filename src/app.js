require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env'
});

const express = require('express')

class AppController {
    constructor() {
        this.express = express();

        this.middlewares();
        this.routes()
    }

    middlewares() {
        this.express.use(express.json())
    }

    routes() {
        this.express.use(require('./routes'))
    }
}

module.exports = new AppController().express

/**
 * ARQUIVO DE CRIAÇÃO DO SERVIDOR
 * Separa-se o arquivo de criação do servidor do arquivo de alocação da porta, pois meu intuito é rodar os testes sem precisar deixar o servidor online, sem alocação de porta
 */