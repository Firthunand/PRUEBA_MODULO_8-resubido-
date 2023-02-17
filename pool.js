const { Pool } = require('pg');



require('dotenv').config();

const config = {
    user:process.env.PG_USER,
    host:process.env.PG_HOST,
    password:process.env.PG_PASS,
    database:process.env.PG_NAME,
    port:process.env.PG_PORT
};

const pool = new Pool(config);

module.exports = { pool };
