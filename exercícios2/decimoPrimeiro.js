function primeiroEUltimo(elemento) {
    let primeiro = 0
    let ultimo = elemento.length - 1
    
    let primeiroElemento = elemento[primeiro]
    let ultimoElemento = elemento[ultimo]

    return [primeiroElemento, ultimoElemento]
}

console.log(primeiroEUltimo([1, 2, 3, 4, [1, 2, 3]]))
console.log(primeiroEUltimo(['a', 1, 2, 3, 4, [1, 2, 3]]))