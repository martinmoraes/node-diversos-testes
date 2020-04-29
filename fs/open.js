/*
O fs.open()método usa um "sinalizador" como segundo argumento, 
se o sinalizador for "w" para "gravação", o arquivo especificado 
será aberto para gravação. Se o arquivo não existir, um arquivo vazio será criado
*/

var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});