const mongoose = require('mongoose')

const episSchema = new mongoose.Schema({
    atividade: String,
    tipoEpi: String,
    ca: String
});

const Epis = mongoose.model('Epis', episSchema);

const Funcionario = mongoose.model('Funcionario', {
    nome: String,
    cpf: String,
    rg: Number,
    dataNascimento: String,
    cargo: String,
    sexo: String,
    ativo: Boolean,
    usaEpi: Boolean,
    atestadoSaude: String,
    epis: [episSchema]
})

module.exports = Funcionario