const mysql = require('../../mysql').pool;

exports.getPatients = (req, res, next) =>{      
    mysql.getConnection((error, conn) =>{
        if (error) { console.error(error); res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM patient;',        
            (error, result, field) =>{            
                if (error) { console.error(error); res.status(500).send({ error: error }) }
                return res.status(200).send({response: result});;
            }
        )
    });
}

exports.singlePatient = (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { console.error(error); res.status(500).send({ error: error }) }

        conn.query(
            'SELECT * FROM patient WHERE id = ?;',       
            [req.params.id], 
            (error, result, field) =>{            
                if (error) { return res.status(500).send({ error: error }) }
                return res.status(200).send({response: result});;
            }
        )
    });
}

exports.postPatient = (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'INSERT INTO patient(nome, cpf, email, genero, data_nascimento) VALUES (?, ?, ?, ?, ?)',
            [req.body.nome, req.body.cpf, req.body.email, req.body.genero, req.body.data_nascimento],
            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(201).send({
                    message: 'Paciente cadastrado com sucesso',
                    id: result.insertId
                });;
            }
        )
    })
}

exports.updatePatient = (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            `UPDATE patient
                SET nome            = ?, 
                    cpf             = ?,
                    email           = ?,
                    genero          = ?,
                    data_nascimento = ?
            WHERE   id              = ?`,
            [   
                req.body.nome, 
                req.body.cpf, 
                req.body.email, 
                req.body.genero, 
                req.body.data_nascimento,
                req.body.id
            ],            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    message: 'Paciente atualizado com sucesso',
                });;
            }
        )
    })
}

exports.deletePatient = (req, res, next) =>{
    mysql.getConnection((error, conn) =>{
        if (error) { return res.status(500).send({ error: error }) }

        conn.query(
            'DELETE FROM patient WHERE id = ?', [req.body.id],            
            (error, result, field) =>{
                if (error) { return res.status(500).send({ error: error }) }

                res.status(202).send({
                    message: 'Paciente removido com sucesso',
                });;
            }
        )
    })
}