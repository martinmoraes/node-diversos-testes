const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
console.time('teste');

const server = http.createServer(
    (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello, World!\n');
    }
);

server.listen(port, hostname,
    () => {
        console.warn(`Server running at http://${hostname}:${port}/`);
    }
);
console.timeEnd('teste');
console.dir(global.global);