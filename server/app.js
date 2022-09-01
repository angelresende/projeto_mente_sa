const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger.json');

const rotaProfissionais = require('./src/routes/profissional');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/profissional/cadastrar', rotaProfissionais)

app.use('/terms', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Termos de Serviço'
    });
});

module.exports = app;