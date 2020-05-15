const fs = require('fs')

console.log(1)

const readFile = file => new Promise((resolve, reject) => { 
    fs.readFile(file, (err, res) => {
        if (err) reject(err)
        resolve(res)
    })
})

const leitura = async() => {
    console.log(4)
    try {
        const contentes01 = await readFile('./arq01.txt')
        console.log(contentes01)
        console.log(5)
        const contentes02 = await readFile('./arq02.txt')
        console.log(6)
    
        console.log(contentes01 + '\n' + contentes02)

    } catch(err) {
        console.log('Erro ao ler arquivo: ' + err)
    } finally {
        console.log('Terminou o processo!')
    }

    

}

console.log(2)
leitura()
console.log(3)
