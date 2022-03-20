

function menorNumero(elemento) {

    let resultado = elemento[0]

    for(let i = 0; i < elemento.length; i++) {
        if(elemento[i] < resultado) {
            resultado = elemento[i]
        }
    }
    return resultado

}


console.log(menorNumero([10, 5, 35, 65])) // retornará 5
console.log(menorNumero([5, -15, 50, 3])) // retornará -15