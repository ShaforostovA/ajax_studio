const job = require("./database.js")

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

app.post('/person/list', async (req, res) => {
    let resData = await job.getPersons()
    res.status(200).json(resData)
});

app.listen(port, () => {
    console.log(`Listen http://localhost:${port}`)
})
