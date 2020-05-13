

function callback(param){
    console.log( param )
}


const modelo = (fn, param) => {
    fn(param)
}

modelo(callback, 'Olá')