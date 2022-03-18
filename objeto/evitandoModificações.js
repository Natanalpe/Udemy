// Object.preventExtensions
// não é possível adicionar novos atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Externsível: ', Object.isExtensible(produto))
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal nã é possível adicionar novos elementos
// nem excluir atributos apenas modificar 
const pessoa = { nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa) // alterou a idade porem não deletou o nome

// Object.freeze = selado + valores constantes