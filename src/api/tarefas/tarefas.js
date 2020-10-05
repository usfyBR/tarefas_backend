const restful = require('node-restful')
const mongoose = restful.mongoose

const tarefasSchema = mongoose.Schema({
    description: { type: String, required: true },
    // target: { type: Date, default: Date.now },
    done: { type: Boolean, required: true, default: false },
    createAt: { type: Date, default: Date.now }
})

module.exports = restful.model("tarefas", tarefasSchema)