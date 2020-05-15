
console.log(1)

const mensagem = (timeout, msg) => new Promise( (resolve, reject ) => {
    setTimeout(() => {
        console.log(timeout, msg)
        resolve({timeout, msg: `Resolve ${timeout} e ${msg}`})
    }, timeout);
})

async function mostra() {
    console.log(4)
    try {
        const contentes01 = await mensagem(1000, 'Primeiro')
        console.log(contentes01.msg)
        console.log(5)
        const contentes02 = await mensagem(contentes01.timeout, 'Segundo')
        console.log(6)
    
        console.log(contentes01.msg + '\n' + contentes02.msg)

    } finally {
        console.log('Terminou o processo!')
    }
}

const start = async() => {
    console.log(4)
    try {
        const contentes01 = await mensagem(1000, 'Primeiro')
        console.log(contentes01.msg)
        console.log(5)
        const contentes02 = await mensagem(contentes01.timeout, 'Segundo')
        console.log(6)
    
        console.log(contentes01.msg + '\n' + contentes02.msg)

    } finally {
        console.log('Terminou o processo!')
    }
}

console.log(2)
start()
// mostra()
console.log(3)
