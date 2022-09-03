const express = require('express');
const router = express.Router();
const mysql = require('../../mysql').pool;

router.get('/', (req, res, next) =>{  
    
    mysql.getConnection((error, conn) =>{
        if (error) { console.error(error); res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM session;',        
            (error, result, field) =>{            
                if (error) { console.error(error); res.status(500).send({ error: error }) }
                return res.status(200).send({response: result});;
            }
        )
    });

});

router.get('/:id', (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { console.error(error); res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM session WHERE id = ?;',       
            [req.params.id], 
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
            `INSERT INTO session(
                    professional_id, 
                    patient_id, 
                    data_agendamento, 
                    status, 
                    tema_abordado, 
                    tipo_agendamento,
                    duracao, 
                    tipo_sessao
                ) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [      
                req.body.professional_id, 
                req.body.patient_id, 
                req.body.data_agendamento, 
                req.body.status, 
                req.body.tema_abordado,
                req.body.tipo_agendamento,
                req.body.duracao,
                req.body.tipo_sessao
            ],
            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(201).send({
                    message: 'Sessão cadastrada com sucesso',
                    id: result.insertId
                });;
            }
        )
    })
});

router.patch('/', (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `UPDATE session
                SET professional_id     = ?, 
                    patient_id          = ?,
                    data_agendamento    = ?,
                    status              = ?,
                    tema_abordado       = ?,
                    tipo_agendamento    = ?,
                    duracao             = ?, 
                    tipo_sessao         = ?,
            WHERE   id                  = ?`,
            [   
                req.body.professional_id, 
                req.body.patient_id, 
                req.body.data_agendamento, 
                req.body.status, 
                req.body.tema_abordado,
                req.body.tipo_agendamento,
                req.body.duracao,
                req.body.tipo_sessao,
                req.body.id
            ],            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    message: 'Sessão atualizada com sucesso',
                });;
            }
        )
    })
});

router.delete('/', (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'DELETE FROM session WHERE id = ?', [req.body.id],            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    message: 'Sessão removida com sucesso',
                });;
            }
        )
    })
});

module.exports = router;