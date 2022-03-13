// 19) O cardápio de uma lanchonete é o seguinte:
//
// ...
// ...
// ...
//
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
// a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
// comando switch. Crie um caso default para produto não existente


function preco(codigo, quantidade) {

    let valor = 'R$: '

    switch (codigo) {
        case 100:
            return valor += (quantidade * 3).toFixed(2)
        case 200:
            return valor += (quantidade * 4).toFixed(2)
        case 300:
            return valor += (quantidade * 5.5).toFixed(2)
        case 400:
            return valor += (quantidade * 7.5).toFixed(2)
        case 500:
            return valor += (quantidade * 3.5).toFixed(2)
        case 600:
            return valor += (quantidade * 2.8).toFixed(2)
        default:
            return 'Erro. Por favor, verifique os valores e tente novamente.'
    }
    return valor
}

console.log(preco(100, 1))
console.log(preco(200, 2))
console.log(preco(300, 7))
console.log(preco(400, 3))
console.log(preco(500, 1))
console.log(preco(600, 7))
console.log(preco('teste de erro'))