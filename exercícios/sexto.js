// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.

let moeda = 'R$'

function jurosSimples(capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)
    
}


function jurosCompostos (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    return capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao
}

console.log(moeda, jurosSimples(1000, 10/100, 3));
console.log(moeda, jurosCompostos(2000, 10/100, 3).toFixed(2).replace('.', ','));
