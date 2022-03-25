
let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bis', 'Carlos', 'Daniel']) 
    // só retornara 1 valor
    // A não ser que seja um Objeto / Array / lista
})

const primeiroElemento = string => string[0]
const primeiraLetra = letra => letra[0]
const letraMinuscula = letra => letra.toLowerCase()

// Then() pode ser usado varias vezes
p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)