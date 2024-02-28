const Funcionario = require("../person/Funcionario");
const router = require('express').Router()

router.post('/', async (req, res) => {

    const {nome, cpf, rg, dataNascimento, cargo, sexo, ativo, usaEpi, atestadoSaude, epis } = req.body

    if (!nome) {
        res.status(422).json({error: 'O nome é obrigatório'})
        return
    }

    const funcionario = {
        nome,
        cpf,
        rg,
        dataNascimento,
        cargo,
        sexo,
        ativo,
        usaEpi,
        atestadoSaude,
        epis
    }

    try {

        await Funcionario.create(funcionario)

        res.status(201).json({message: 'Funcionário inserido com sucesso'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/', async (req, res) => {
    try {

        const pessoa = await Funcionario.find()

        res.status(200).json(pessoa)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.get('/:id', async (req, res) => {

    const id = req.params.id

    try {

        const pessoa = await Funcionario.findOne({_id: id})

        if (!pessoa) {
            res.status(422).json({message: 'Funcionario não foi encontrado!'})
            return
        }

        res.status(200).json(pessoa)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.patch('/:id', async (req, res) => {

    const id = req.params.id

    const {nome, cpf, rg, dataNascimento, cargo, sexo, ativo, usaEpi, atestadoSaude, epis} = req.body

    const funcionario = {
        nome,
        cpf,
        rg,
        dataNascimento,
        cargo,
        sexo,
        ativo,
        usaEpi,
        atestadoSaude,
        epis
    }

    try {

        const updateFuncionario = await Funcionario.updateOne({_id: id}, funcionario)

        if (updateFuncionario.matchedCount === 0) {
            res.status(422).json({message: 'Funcionario não foi encontrado!'})
            return
        }

        res.status(200).json(funcionario)

    } catch (error) {
        res.status(500).json({error: error})
    }
})

router.delete('/:id', async (req, res) => {

    const id = req.params.id

    const pessoa = await Funcionario.findOne({_id: id})

    if (!pessoa) {
        res.status(422).json({message: 'Funcionario não foi encontrado!'})
        return
    }

    try {

        await pessoa.deleteOne({_id: id})

        res.status(200).json({message: 'Funcionário removido com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

module.exports = router