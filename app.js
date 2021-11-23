const express = require('express')
const app = express()
const port = 3000

const obj = {
    status: 200,
    file: 'public/index.html',
    author: "Sasha"
}

// sendFile will go here
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
    res.send(obj)
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})