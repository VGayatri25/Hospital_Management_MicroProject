const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VentilatorSchema = new Schema({
    hId:{
        type: String,
        required:[true]
    },
    ventilatorId:{
        type: String,
        required:[true]
    },
    status:{
        type: String,
        required:[true]
    },
    name:{
        type: String,
        required:[true]
    }
})

const ventilator = mongoose.model('ventilatorDetails', VentilatorSchema)
module.exports = ventilator