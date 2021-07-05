var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

const produtoModel = require('../models/produtos.model');

/*GET ALL PRODUTOS*/
router.get('/', function(req, res, next){
    produtoModel.find(function(err,produtosListResponse){
        if(err){
            res.send({status:500, message:"Erro ao buscar produtos"});
        }else{
            const recordCount = produtosListResponse.length;
            res.send({status: 200, recordCount:recordCount, result: produtosListResponse});
        }
    });
}); 


module.exports = router;