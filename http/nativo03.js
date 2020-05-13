const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
    const rota = req.url
    const method = req.method
    
    console.log(rota, method)
    console.log(bory)

    res.statusCode = 200
    switch(rota){
        case '/':
            res.setHeader('Content-Type', 'text/plain')
            res.end('Hello, World!\n')
            break
        case '/users':
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({
                users: [{
                    nome: 'LineSet',
                    email: 'contato@lineset.com.br',
                    id:1
                }, {
                    nome: 'Tudo é Nobre',
                    email: 'nobre@lineset.com.br',
                    id:2
                }]
                }))
            break
    }
})  //.listen(3000)


function aviso() {
    console.log(`Server running at http://${hostname}:${port}/`);       
}

server.listen(
    port, 
    hostname, 
    aviso
);