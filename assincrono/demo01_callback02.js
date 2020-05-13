const fs = require('fs')

console.log(1)

function callback(err, res){
    if(err) console.log(err)

    console.log( String(res) )
}

fs.readFile('./arq01.txt', (err, res) => {
    if(err) return console.log(err)

    console.log( String(res) )
})
console.log(2)

console.log(3)