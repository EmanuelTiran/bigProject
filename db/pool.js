const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // name of user
    database: 'pepole_schema', // schema
    password: '7118181' // my code 
});
module.exports = pool;