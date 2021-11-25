const express = require('express')

const app = express()
const port = 3000

const obj = [
    {
        status: 200,
        file: 'public/index.html',
        author: "Андрей"
    },
    {
        status: 201,
        file: 'public/index.html',
        author: "Олег"
    },
    {
        status: 202,
        file: 'public/index.html',
        author: "Виталя"
    },
    {
        status: 203,
        file: 'public/index.html',
        author: "Саня"
    },
    {
        status: 204,
        file: 'public/index.html',
        author: "Акакий"
    }
]

app.use(express.static(__dirname + '/public'));

// sendFile will go here
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

app.get('/test', (req, res) => {
    res.send(obj)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})