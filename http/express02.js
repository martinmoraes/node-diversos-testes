const express = require('express')
const consign = require('consign')

const hostname = '127.0.0.1';
const port = 3000;

let app = express()

consign().include('routes').into(app)

app.listen(port, hostname,
    () => console.log(`Server running at http://${hostname}:${port}/`))