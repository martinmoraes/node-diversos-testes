console.log(1)
const mensagem = (timeout, msg) => {
  setTimeout(() => {
	console.log( {timeout, msg, order: 2} )
			setTimeout( () => {
				console.log( {timeout: 500, msg:'Segundo', order: 3} )
					setTimeout( () => {
						console.log( {timeout: 300, msg:'Terceiro', order: 4} )
				    },300);
		    },500);
  }, timeout);
}

mensagem(1000, 'Primeiro')