var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const contatoModel = require('../models/contatos.model');

/*GET ALL CONTATOS */
router.get('/', function(req, res, next){
    contatoModel.find(function(err,contatosListResponse){
        if(err){
            res.send({status:500, message:"Erro ao buscar contatos"});
        }else{
            const recordCount = contatosListResponse.length;
            res.send({status: 200, recordCount:recordCount, result: contatosListResponse});
        }
    });
}); 

module.exports = router;