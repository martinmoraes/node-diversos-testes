/*
A setTimeout()função é comumente usada se você deseja executar sua função um 
número especificado de milissegundos a partir de quando o setTimeout() método
foi chamado.
*/

// function sayHello() {
//     console.log('Hello');
// }
// sayHello();

// setTimeout(sayHello, 1000);




function sayHello(message = "Olá", person = "") {
    console.log(message + ', ' + person);
}
sayHello();
setTimeout(sayHello, 1000, "Hi", "Monica");
setTimeout(() => sayHello('Hello'), 1000);
