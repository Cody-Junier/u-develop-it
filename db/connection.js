const mysql = require('mysql2')

// connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '24346',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;