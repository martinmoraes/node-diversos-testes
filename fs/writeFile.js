/*
O fs.writeFile()método substitui o arquivo e o conteúdo especificados, 
se existir. Se o arquivo não existir, um novo arquivo, contendo o conteúdo 
especificado, será criado
*/
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});