const express = require('express');
const Model = require('../Model/contactModel');


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

module.exports=router