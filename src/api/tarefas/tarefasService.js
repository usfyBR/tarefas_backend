const Tarefas = require('./tarefas')

Tarefas.methods(['get', 'post', 'put', 'delete'])
Tarefas.updateOptions({ new: true, runValidators: true })

module.exports = Tarefas