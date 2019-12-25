const mongoose = require('mongoose')

const partySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    where: String,
    when: String,
    note: []
})

const Party = mongoose.model('Party', partySchema)

module.exports = Party