const job = require("./fanction.js")

const express = require('express')

const app = express()
const port = 3000

const obj = [
    {
        status: 200,
        file: 'public/index.ejs',
        author: "Андрей"
    },
    {
        status: 201,
        file: 'public/index.ejs',
        author: "Олег"
    },
    {
        status: 202,
        file: 'public/index.ejs',
        author: "Виталя"
    },
    {
        status: 203,
        file: 'public/index.ejs',
        author: "Саня"
    },
    {
        status: 204,
        file: 'public/index.ejs',
        author: "Акакий"
    }
]

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// sendFile will go here
app.get('/', (req, res) => {
    res.render(__dirname + "/public/index.ejs")
});

app.get('/test', (req, res) => {
    res.send(obj)
})

app.post('/person/list', (req, res) => {
    res.send(job.getPersons())
    console.log(res)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})