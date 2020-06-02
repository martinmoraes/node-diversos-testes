const fs = require('fs')

console.log(1)

fs.readFile('./arq01.txt', (err, res) => {
    if(err) return console.log(err)

    console.log( String(res) )
})

console.log(2)
fs.readFile('./arq02.txt', (err, res) => {
    if(err) return console.log(err)

    console.log( String(res) )
})

console.log(3)