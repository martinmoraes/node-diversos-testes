const fetch = require("node-fetch");

// function chamada(url){
//     fetch(url)
//         .then( response => {
//             console.log(response)
//         })
// }

// chamada('https://jsonplaceholder.typicode.com/todos/1')

fetch('https://jsonplaceholder.typicode.com/todos/10')
  .then(response => response.json())
  .then(json => console.log(json))