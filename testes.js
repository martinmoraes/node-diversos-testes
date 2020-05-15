

const mensagem = (msg, tempo) => {
    setInterval(
        () => console.log(msg), tempo )
}

mensagem('olá', 200)
mensagem('Martin', 200)