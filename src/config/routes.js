const express = require('express')

module.exports = function (server) {

    //API Routes
    const router = express.Router()
    server.use('/api', router)

    // TAREFAS Routes
    const tarefaService = require('../api/tarefas/tarefasService')
    tarefaService.register(router, '/tarefas')

}