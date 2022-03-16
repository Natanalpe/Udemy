// pessoa -> 123 -> {...}
const pessoa = { nome: 'Natan'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa ,_ 456 -> {...}
//pessoa = { nome: 'Ana'} =*= ERRO =*=

Object.freeze(pessoa) // congelando o objeto pessoa

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)