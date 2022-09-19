const mysql = require('../../mysql').pool;

exports.getProfessionals = (req, res, next) =>{  
    
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
}

exports.singleProfessional = (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { console.error(error); res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM professional WHERE id = ?;',       
            [req.params.id], 
            (error, result, field) =>{            
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({response: result});;
            }
        )
    });
}

exports.postProfessiobal = (req, res, next) =>{

    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'INSERT INTO professional(nome, crp, contato, abordagem) VALUES (?, ?, ?, ?)',
            [req.body.nome, req.body.crp, req.body.contato, req.body.abordagem],
            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(201).send({
                    message: 'Profissional cadastrado com sucesso',
                    id: result.insertId
                });;
            }
        )
    })
}

exports.updateProfessional = (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `UPDATE professional
                SET nome        = ?, 
                    crp         = ?,
                    contato     = ?,
                    abordagem   = ?
            WHERE   id          = ?`,
            [   
                req.body.nome, 
                req.body.crp, 
                req.body.contato, 
                req.body.abordagem, 
                req.body.id
            ],            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    message: 'Profissional atualizado com sucesso',
                });;
            }
        )
    })
}

exports.deleteProfessional = (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'DELETE FROM professional WHERE id = ?', [req.body.id],            
            (error, result, field) =>{
                conn.release();
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    message: 'Profissional removido com sucesso',
                });;
            }
        )
    })
}