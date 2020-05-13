const express = require('express')

let app = express()
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello, World!\n')
    
 })

 app.get('/users', (req, res) => {
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

app.listen(port, hostname,
    () => console.log(`Server running at http://${hostname}:${port}/`))