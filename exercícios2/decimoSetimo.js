

function somarNumeros(elemento) {
    
    let resultado = 0

    for(let i = 0; i < elemento.length; i++) {
        resultado += elemento[i]
    }
    return console.log(resultado)
}


somarNumeros([10, 10, 10]) // retornará 30
somarNumeros([15, 15, 15, 15]) // retornará 60