const mongoose = require('mongoose');

const contatoSchema = mongoose.Schema({
    cel:String,
    email:String,
    endereco:String,
    nome:String
});

const contatoModel = mongoose.model('Contatos',contatoSchema);

module.exports = contatoModel;