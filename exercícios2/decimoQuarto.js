

function arrayParaCadaIndice(elemento) {

    let resultado = Object.entries(elemento)
    return resultado
}

console.log(arrayParaCadaIndice({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
}))