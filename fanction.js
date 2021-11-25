const { Pool } = require('pg');
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
});
async function getPersons(){
    let data = [];
    
    pool.query(`SELECT "name", "lastName" as lastName, "age", "city", "work" from persons ORDER BY lastName`, (err, res) => {
        try{
            console.log('getPersons: Выполнение запроса на получение списка людей.');
            data = res;
            console.log('getPersons: Запрос выполнился успешно.');
        }
        catch (err) {
            console.log('getPersons: ERROR')
            console.log(err.stack, err.message);
        }
        finally {
            pool.end()
            console.log('Pool end');
        }
    })
    return data;
}
module.exports = {
    getPersons: getPersons,
};