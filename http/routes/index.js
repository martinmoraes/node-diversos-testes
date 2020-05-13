let express = require('express')
let routes = express.Router()

routes.get('/', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World!\n')
    
 })

 module.exports = routes