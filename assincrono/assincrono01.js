
console.log(1)

const mensagem = (timeout, msg) => {
    setTimeout(() => {
        const res = {timeout, msg: `Resolve ${timeout} e ${msg}`}
        console.log(res)
        return res
    }, timeout);
}

console.log(2)
console.log(mensagem(1000, 'Primeior'))
console.log(3)
console.log(mensagem(500, 'Segundo'))
