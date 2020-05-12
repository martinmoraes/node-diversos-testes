const fs = require('fs')

console.log(1)

function readFile(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, res) => {
            if (err) reject(err)
            resolve(res)
        })
    })
}

// const readFile = file => new Promise((resolve, reject) => { 
//     fs.readFile(file, (err, res) => {
//         if (err) reject(err)
//         resolve(res)
//     })
// })

readFile('arq01.txt')
    .then(contents => {
        console.log(String(contents))
        return readFile('./arq02.txt')
    })
    .then( contents => {
        console.log( String(contents))
    })
    .catch (  err => {
        console.log(`Terminou com erro: ${err}`)
    })
    .finally ( () => {
        console.log('Este processo terminou')
    })
console.log(3)
console.log(2)
