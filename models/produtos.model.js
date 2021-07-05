const mongoose = require('mongoose');

const produtoSchema = mongoose.Schema({
    nome:String,
    preco:Number,
    quantidade:Number
});

const produtoModel = mongoose.model('Produtos',produtoSchema);

module.exports = produtoModel;