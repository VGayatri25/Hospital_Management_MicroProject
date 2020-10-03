
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app=express()

mongoose.connect('mongodb://localhost/hospitalManagement')
mongoose.Promise = global.Promise;

app.use(bodyParser.json())
//initialize routes
app.use('/api',require('./routes/app'))

//error handling middleware
app.use(function(err,req,res,next){
    //console.log(err)
    res.status(422).send({error: err.message});
})

app.listen(process.env.port || 4000, function(){
    console.log('listening to port')
})






