const express = require('express')
let routesIndex = require('./routes/index')
let routesUsers = require('./routes/users')

const hostname = '127.0.0.1';
const port = 3000;

let app = express()
app.use(routesIndex)
app.use('/users', routesUsers)

app.listen(port, hostname,
    () => console.log(`Server running at http://${hostname}:${port}/`))