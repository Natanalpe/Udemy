// 22) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido

function anuidade(mes, valor) {

    mes = mes - 1

    if(mes > 0 && mes <= 12) {

        return `O total a ser pago será: \nR$: ${(valor * (1 + (5/100)) ** mes).toFixed(2).replace('.', ',')}\n`

    } else {
        return 'Erro, por favor verifique os valores e tente novamente.'
    }

}

console.log(anuidade(2, 100))
console.log(anuidade(10, 100))
console.log(anuidade(4, 100))