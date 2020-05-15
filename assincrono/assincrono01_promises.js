
console.log(1)

const mensagem = (timeout, msg) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve({timeout, msg: `Resolve ${timeout} e ${msg}`})
        }, timeout);
    })
}

console.log(2)
console.time('primeiro')
console.time('geral')
mensagem(1000, 'Primeiro')
    .then( retorno => {
        console.timeEnd('primeiro')
        console.log(retorno)
        console.time('segundo')
        return mensagem(500, 'Segundo')
    })
    .then( retorno => {
        console.timeEnd('segundo')
        console.timeEnd('geral')
        console.log(retorno)
    })
    .catch( error => {
        console.log(error)
    })
console.log(3)

    
