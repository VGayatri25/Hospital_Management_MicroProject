const express = require('express')
const router = express.Router();
const Hospital = require('../models/hospital')
const Ventilator = require('../models/ventilator')
let server=require('../server');
let config=require('../config');
let middleware=require('../middleware');

//reading hospital details
router.get('/rhd',middleware.checkToken,function(req,res,next){
    Hospital.find({}).then(function(hospital){
        res.send(hospital)
    })
})

//reading ventilator details
router.get('/rvd',middleware.checkToken,function(req,res,next){
    Ventilator.find({}).then(function(ventilator){
        res.send(ventilator)
    })
})

//search ventilators by status and hospital name
router.get('/svh',function(req,res,next){
    Ventilator.find({status:"occupied",name:'Yashoda Hospital'}).then(function(ventilator){
        res.send(ventilator)
    })
})

//search by hospital name
router.get('/hn',function(req,res,next){
    Hospital.find({name:'Gandhi hospital'}).then(function(hospital){
        res.send(hospital)
    })
})

//adding new ventilator details
router.post('/vd',function(req,res,next){
    Ventilator.create(req.body).then(function(ventilator){
        res.send(ventilator)
    }).catch(next)
})

//updating ventilator details
router.put('/vm/:id',function(req,res,next){
    Ventilator.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(ventilator){
        Ventilator.findOne({_id: req.params.id}).then(function(ventilator){
            res.send(ventilator)
        })
    })
})

//deleting ventilator by ventilatorId
router.delete('/dv/:id',function(req,res,next){
    Ventilator.findByIdAndRemove({_id: req.params.id}).then(function(ventilator){
        res.send(ventilator)
    })
})

module.exports = router;
