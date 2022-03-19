function multi(a, b) {

    let resultado = 0

    for(let i = 0; i < a; i++) {
        resultado += b
    }
    return resultado
}

console.log(multi(5, 10))
console.log(multi(1, 10))