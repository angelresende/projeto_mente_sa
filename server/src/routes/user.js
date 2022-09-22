const express = require('express');
const router = express.Router();
const mysql = require('../../mysql').pool;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')


router.post('/', (req, res, next) =>{

    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }
        const query = `SELECT * FROM users WHERE email = ?`;
        conn.query(query, [req.body.email], (error, results, fields) =>{
            if (error) {return res.status(500).send({error: error})}
            if(results.length > 0){
                return res.status(409).send({mensagem: 'Usuário já cadastrado'})
            }else{
                bcrypt.hash(req.body.senha, 10, (errBcrypt, hash) => {
                    if(errBcrypt) { return res.status(500).send({error: errBcrypt})}
                    conn.query(
                        'INSERT INTO users(nome, email, senha) VALUES (?, ?, ?)',
                        [req.body.nome, req.body.email, hash],
                        
                        (error, result) =>{
                            conn.release();
                            if (error) { return res.status(500).send({ error: error }) }
            
                            res.status(201).send({
                                message: 'Usuário criado com sucesso',
                                id: result.insertId
                            });;
                        }
                    )
                })               
            }            
        })        
    })
}
)


router.post('/login', (req, res, next) =>{

    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }
        const query = `SELECT * FROM users WHERE email = ?`;
        conn.query(query, [req.body.email], (error, results, fields) =>{
            conn.release();
            if (error) {return res.status(500).send({error: error})}
            if(results.length < 1){
                return res.status(401).send({mensagem: 'Falha na autenticação'})
            }
            bcrypt.compare(req.body.senha, results[0].senha, (error, result) => {
                if(error){
                    return res.status(401).send({mensagem: 'Falha na autenticação'})
                }
                if(result){
                    const token = jwt.sign({
                        nome: results[0].nome,
                        email: results[0].email
                    }, 
                    "secret",
                    {
                        expiresIn: "1h"
                    })
                    return res.status(200).send({
                        mensagem: 'Autenticado com sucesso',
                        token: token
                    })
                }
                return res.status(401).send({mensagem: 'Falha na autenticação'})
            })
        })
    })
}
)

module.exports = router;