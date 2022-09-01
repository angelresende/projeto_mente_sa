const express = require('express');
const router = express.Router();

router.get('/profissional/cadastrar', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o GET dentro da rota cadastrar profissional'
    });
});

router.get('/profissional/cadastrar', (req, res, next) =>{
    res.status(201).send({
        mensagem: 'Usando o POST dentro da rota cadastrar profissional'
    });;
});

module.exports = router;