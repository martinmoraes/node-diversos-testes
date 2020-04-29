/*
O fs.appendFile()método anexa o conteúdo especificado a um arquivo. 
Se o arquivo não existir, ele será criado
*/

var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});