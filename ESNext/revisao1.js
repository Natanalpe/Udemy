// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)
// console.log(b) Erro


// Template String ``
const produto = 'Ipad'
console.log(`${produto}
    é
caro
`)

// Destructuring (tirar de dentro de uma estrutura algo)
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } =  { nome: 'Ana', idade: 9 }
console.log(i, nome)