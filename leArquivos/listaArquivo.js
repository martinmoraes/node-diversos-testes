const fs = require('fs');


function trataRetorno(err, res) {
    if (err) return err;

    const obj = String(res);
    // console.log(String(res));

    const valores = JSON.parse(obj);
    // console.log(valores)
    valores.forEach(element => {
        console.log(element);
    });

}

fs.readFile('./dados.json', trataRetorno);


