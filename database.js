const response = require("express");
const { Pool } = require('pg');

const pool  = new Pool ({
    user: 'admin',
    host: 'localhost',
    database: 'viridium',
    password: 'venik5432',
    port: 5432,
});

async function getPersons() {
    const { rows } = await pool.query(`SELECT * FROM persons ORDER BY lastName`)
    return rows
}

module.exports = {
    getPersons: getPersons,
};