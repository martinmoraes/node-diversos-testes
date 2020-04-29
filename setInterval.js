/*
A setInterval()função, como o nome sugere, é comumente usada para definir um
atraso para funções executadas repetidamente como animações.
*/

// A mensagem Hello será repetida a cada 1 segundos
let timerId = setInterval(() => console.log('Hello'), 1000);

// Encerra o intervals após 6 segundos - com o id do timer 
setTimeout(() => { clearInterval(timerId); console.log('Bye'); }, 6000);