const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const port = 3000;

let app = express()

// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

consign().include('routes').into(app)

app.listen(port, hostname,
    () => console.log(`Server running at http://${hostname}:${port}/`))