

function contarPalavras(elemento) {
    let resultado = elemento.split(' ')
    return console.log(resultado.length)
}


contarPalavras("Sou uma frase") // retornará 3
contarPalavras("Me divirto aprendendo a programar") // retornará 5