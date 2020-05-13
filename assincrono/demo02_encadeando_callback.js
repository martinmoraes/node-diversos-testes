
console.log(1)



const consultaB = (fk) => {setTimeout(() => {},500)}
const salvarJson = (arq) => {setTimeout(() => console.log('Salvar arquivo JSON concluido!'),300)}

const consultaA = (pk) => {setTimeout(() => {
        console.log('Consulta pk concluida!')
        consultaB()
    },1000)}

console.log(2)

consultaA()
salvarJson()

console.log(3)