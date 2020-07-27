var express = require('express');
const fs = require('fs');
var router = express.Router(express, fs);
var product = require('../models/product.model');
var Response = require('../utils');
const dataPath = '../data.json';

const readFile = (callback,returnJson=false,filePath=dataPath,encoding='utf8')=>{
    fs.readFile(filePath,encoding,(err,data)=>{
        if (err) {
            throw err;
        }
        callback(returnJson ? JSON.parse(data) : data);
    });
};

router.get('/',(req,res)=>{
    fs.readFile(dataPath,'utf8',(err,data)=>{
        if(err){
            throw err;
        }
        data = JSON.parse(data);
        res.status(200).send(Response({ isSuccess: true, data }));
    });
});

router.post('/', async(req, res)=>{
    await product.insertMany(req.body).then(response=>{
      res.status(201).send(response);
    }).catch(err=>{
      res.status(400).send(err);
    });
});

module.exports = router;