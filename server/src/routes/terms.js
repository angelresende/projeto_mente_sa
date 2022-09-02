const express = require('express');
const router = express.Router();

//RETORNA TODAS OS TERMOS DE SERVIÇO
router.get('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Termos de Serviço'
    });
});

module.exports = router;