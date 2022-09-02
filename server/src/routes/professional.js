const express = require('express');
const router = express.Router();
const mysql = require('../../mysql').pool;

router.get('/', (req, res, next) =>{  
    
    mysql.getConnection((error, conn) =>{
        if (error) { console.error(error); res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM professional;',        
            (error, result, field) =>{            
                if (error) { console.error(error); res.status(500).send({ error: error }) }
                return res.status(200).send({response: result});;
            }
        )
    });

});

//RETORNA OS DADOS DE UM PROFISSIONAL ESPECÍFICO
router.post('/:id_professional', (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { console.error(error); res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM professional WHERE id_professional = ?;',       
            [req.params.id_professional], 
            (error, result, field) =>{            
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({response: result});;
            }
        )
    });
});

router.post('/', (req, res, next) =>{

    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'INSERT INTO professional(nome, crp, contato, abordagem) VALUES (?, ?, ?, ?)',
            [req.body.nome, req.body.crp, req.body.contato, req.body.abordagem],
            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(201).send({
                    message: 'Profissional cadastrado com sucesso',
                    id_professional: result.insertId
                });;
            }
        )
    })
});

//ALTERA OS DADOS DE UM PROFISSIONAL ESPECÍFICO
router.patch('/', (req, res, next) =>{
    res.status(200).send({
        message: 'Usando o PATCH dentro da rota de professional'
    });;
});

//DELETA OS DADOS DE UM PROFISSIONAL ESPECÍFICO
router.delete('/', (req, res, next) =>{
    res.status(200).send({
        mensagem: 'Usando o DELETE dentro da rota de professional'
    });;
});

module.exports = router;