// IIFE => Immeduately invoked function expression

(function () {
    // fora do esopo global
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!')
})()

// Dentro do esopo global
console.log('Será executado na hora!');
console.log('Foge do escopo mais abrangente!')