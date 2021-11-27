const database = require("./database.js")

const express = require('express')

const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(
    express.urlencoded({
        extended: true,
    })
)

// sendFile will go here
app.get('/', (req, res) => {
    res.render(__dirname + "/public/index.ejs")
});

/**
 * Получить информацию о пользователях и вывести
 */
app.get('/person/all_infa', async (req, res) => {
    let resData = await database.getPersons()
    res.render(__dirname + "/public/all_infa.ejs", {
        information: resData
    })
});

/**
 * Получить информацию о пользователях и вывести
 */
app.get('/order_materials', async (req, res) => {
    res.render(__dirname + "/public/order_materials.ejs")
});

/**
 * Получить информацию о пользователях при загрузке странице
 */
app.post('/person/list', async (req, res) => {
    let resData = await database.getPersons()
    res.status(200).json(resData)
});

/**
 * Получить информацию о ценах
 */
app.post('/order_materials/list', async (req, res) => {
    let resData = await database.getPrice()
    res.status(200).json(resData)
});

// Слушать порт
app.listen(port, () => {
    console.log(`\n Listen http://localhost:${port} \n`)
})
