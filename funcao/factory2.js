function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('NoteBook', 1299.99,))
console.log(criarProduto('Ipad', 21899.99,))