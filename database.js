const { Pool } = require('pg');

const pool  = new Pool ({
    user: 'admin',
    host: 'localhost',
    database: 'viridium',
    password: 'venik5432',
    port: 5432,
});

async function getPersons() {
    try{
        const { rows } = await pool.query(`SELECT * FROM persons ORDER BY lastName`)
        return rows
    }
    catch(e){
        console.log(e.message)
    }
}

module.exports = {
    getPersons: getPersons,
};