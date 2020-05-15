const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  const rota = req.url
  const method = req.method
  const body = req.body

  const queryObject = url.parse(req.url,true).query;

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(JSON.stringify({
    method,
    body,
    queryObject}))

}).listen(8080);