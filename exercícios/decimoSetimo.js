// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
//
// ...
// ...
// ...
//
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calcularAumento(plano, salario) {

    switch(plano) {

        case 'a':
            return salario += .1 * salario
        case 'b':
            return salario += .15 * salario
        case 'c':
            return salario += .2 * salario
        default:
            return 'Erro. Por favor, verifique os valores e tente novamente.'
    }
}

console.log(calcularAumento('a', 1000))
console.log(calcularAumento('b', 1000))
console.log(calcularAumento('c', 1000))
console.log(calcularAumento('teste de erro', 1000))