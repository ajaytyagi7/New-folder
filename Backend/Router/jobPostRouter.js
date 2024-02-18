const express = require('express');
const Model = require('../Model/jobPostModel');


const router=express.Router();

router.post('/add',(req,res) =>{
    console.log(req.body);

    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err)
        
    });
});

router.get('/getall',(req,res) => {


    Model.find().populate('company')
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json(err)
    });
});

router.get('/getbyid/:id',(req,res) =>{
    
    Model.findById(req.params.id).populate('company')
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(500).json(err) 
    });
});



router.get('/getbycompany/:company',(req,res) =>{
    Model.find({company : req.params.company})
    .then((result) => {
        console.log(result);
        if(result) res.json(result)
        else res.status(401).json({message: 'Invalid Email'});
        }).catch((err) => {
        console.error(err)
        res.status(500).json(err)
    });
    
    });

    router.delete('/delete/:id', (req, res) => {
        Model.findByIdAndDelete(req.params.id)
        .then((result) => {
          res.json(result);
         }).catch((err) => {
         
         res.status(500).json(err);
       });
      });

    module.exports=router

