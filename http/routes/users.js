module.exports = (app) => {
    app.get('/users', (req, res) => {
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

    app.get('/users/admin', (req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.json({
            users: []
        })
    })

    app.post('/users', (req, res) => {
        res.json(req.body)
    })

}