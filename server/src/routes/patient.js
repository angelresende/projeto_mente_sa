const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PACIENTES
router.get('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Usando o GET dentro da rota cadastrar professional'
    });
});

//RETORNA OS DADOS DE UM PACIENTE ESPECÍFICO
router.get('/:id_patient', (req, res, next) =>{
    const id = req.params.id_patient
    res.status(200).send({
        message: 'Usando o GET de um patient exclusivo',
        id_patient: id
    });;
});

//INSERE UM PACIENTE
router.post('/', (req, res, next) =>{
    res.status(201).send({
        message: 'Usando o POST dentro da rota cadastrar patient'
    });;
});

//ALTERA OS DADOS DE UM PACIENTE ESPECÍFICO
router.patch('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Usando o PATCH dentro da rota de patient'
    });;
});

//DELETA OS DADOS DE UM PACIENTE ESPECÍFICO
router.delete('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Usando o DELETE dentro da rota de patient'
    });;
});

module.exports = router;