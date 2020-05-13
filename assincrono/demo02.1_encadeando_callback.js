const fs = require('fs')

console.log(1)


fs.readFile('./arq01.txt', (err, res01) => {
    if(err) return console.log(err)
    console.log(4)
    fs.readFile('./arq02.txt', (err, res02) => {
        if(err) return console.log(err)
        console.log(5)
        console.log( String(res01) )
        console.log( String(res02) )
    })
})
console.log(2)

console.log(3)