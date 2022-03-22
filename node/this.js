console.log(this === global) // thi não apontaa para global
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)// aponta fora de uma função!

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // não aponta dentro de uma função
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()