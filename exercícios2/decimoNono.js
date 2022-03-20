

function calcularMedia(elemento) {
    
    let soma = 0

    elemento.forEach(element => {
        soma += element
    });
    
    let resultado = soma / elemento.length
    return console.log(resultado)
}


calcularMedia([0, 10]) // retornará 5
calcularMedia([1, 2, 3, 4, 5]) // retornará 3