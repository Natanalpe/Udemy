function repetir(elemento, quantidade) {

    let resultado = elemento

    for(let i = 1; i < quantidade; i++) {
        resultado += ' ' + elemento
    }
    return Array.from(resultado.split(' '))
}

console.log(repetir('Olá', 2))
console.log(repetir(4, 8))