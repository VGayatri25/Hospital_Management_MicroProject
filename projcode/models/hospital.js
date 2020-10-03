const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HospitalSchema = new Schema({
    hId:{
        type: String,
        required:[true]
    },
    name:{
        type: String,
        required:[true]
    },
    address:{
        type: String,
        required:[true]
    },
    contactNo:{
        type: String
    }
})

const hospital = mongoose.model('hospitalDetails', HospitalSchema)
module.exports = hospital