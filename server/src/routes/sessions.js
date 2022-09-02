const express = require('express');
const router = express.Router();

//RETORNA TODAS AS SESSÕES
router.get('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Usando o GET dentro da rota cadastrar sessão'
    });
});

//RETORNA OS DADOS DE UM SESSÃO ESPECÍFICA
router.post('/:id_session', (req, res, next) =>{
    const id = req.params.id_session
    res.status(200).send({
        message: 'Usando o GET de um sessão exclusivo',
        id_session: id
    });;
});

//INSERE UM SESSÃO
router.post('/', (req, res, next) =>{
    res.status(201).send({
        message: 'Usando o POST dentro da rota cadastrar sessão'
    });;
});

//ALTERA OS DADOS DE UMA SESSÃO ESPECÍFICA
router.patch('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Usando o PATCH dentro da rota de sessão'
    });;
});

//DELETA OS DADOS DE UMA SESSÃO ESPECÍFICA
router.delete('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Usando o DELETE dentro da rota de sessão'
    });;
});

module.exports = router;