const { Client } = require('pg');
require('dotenv').config({ path: '../../.env' });

const dbConfig = new Client({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PW,
    database : process.env.DB_NAME,
    port : process.env.DB_PORT,
    // ssl : {
    //     rejectUnauthorized: false
    // }
})

dbConfig.connect();

let sql = 'SELECT * FROM users';
let values = [];
dbConfig.query(sql, values, (err, res) => {
    if (err) {
        console.log(err.stack)
    }
    // dbConfig.end()
})

module.exports = dbConfig;