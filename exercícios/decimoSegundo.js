// 12) Faça um algoritmo que calcule o fatorial de um número.
// 10! = 3 628 800


function fatorial(num) {

    let calculo = 1

    for(let i = num; i > 1; i--) {
        calculo *= i
    }
    console.log(calculo)
}

fatorial(10)