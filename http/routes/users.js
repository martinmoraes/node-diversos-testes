let express = require('express')
let routes = express.Router()

routes.get('/', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({
        users: [{
            nome: 'LineSet',
            email: 'contato@lineset.com.br',
            id:1
        }, {
            nome: 'Tudo é Nobre',
            email: 'nobre@lineset.com.br',
            id:2,
            resultado: 'Todos são posíveis'
        }]
    })
 })

 routes.get('/admin', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.json({
        users: []
    })
 })

 module.exports = routes