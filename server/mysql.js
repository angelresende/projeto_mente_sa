const mysql = require('mysql2');

var pool = mysql.createPool({
    "user": "root",
    "password": "oracle",
    "database": "ong_mente_sa",
    "host": "localhost",
    "port": 3360,
});

exports.pool = pool;