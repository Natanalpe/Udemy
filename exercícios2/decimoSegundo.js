
function removerPropriedade(elemento, remover) {

    let conteudo = Object.assign({}, elemento)
    delete conteudo[remover]


    return conteudo

}

removerPropriedade({a: 1, b: 2}, "a") // retornará {b: 2}
removerPropriedade({
id: 20,
nome: "caneta",
descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}

console.log(removerPropriedade({a: 1, b: 2}, "a"))