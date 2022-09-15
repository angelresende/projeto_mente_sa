const mysql = require('mysql2');

var pool = mysql.createPool({
    // "user": process.env.MYSQL_USER,
    // "password": process.env.MYSQL_PASSWORD,
    // "database": process.env.MYSQL_DATABASE,
    // "host": process.env.MYSQL_HOST,
    // "port": process.env.MYSQL_PORT,

    "user": "root",
    "password": "oracle",
    "database": "ong_mente_sa",
    "host": "localhost",
    "port": 3360,
});

exports.pool = pool;