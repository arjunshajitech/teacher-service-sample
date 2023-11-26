const express = require('express')
const db = require('./connection')
const bodyParser = require('body-parser');
const routes = require('./teacher')

const app = express()
const port = 3000

app.use(bodyParser.json());
app.use('/teacher',routes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

