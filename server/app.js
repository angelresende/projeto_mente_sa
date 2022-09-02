const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger.json');

const professionals = require('./src/routes/professional');
const patients = require('./src/routes/patient');
const sessions = require('./src/routes/sessions');
const terms = require('./src/routes/terms');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/professionals', professionals);
app.use('/patients', patients);
app.use('/sessions', sessions);
app.use('/terms', terms);

app.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({})
    }
    next();
});

//QUANDO NÃO ENCONTRA NENHUMA ROTA, ENTRA AQUI:
app.use((req, res, next) =>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500);
    return res.send({
        error:{
            message: error.message
        }
    })
});

module.exports = app;