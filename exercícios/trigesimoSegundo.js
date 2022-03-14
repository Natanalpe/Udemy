// 2) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

// media = (1 + 3+6+8+0+12+66/7).toFixed(2)
// console.log(media) // 39.43

vetor = [1, 3, 6, 8, 0, 12, 66]

function mediaAritmetica(numerosVetor) {

    let soma = 0


    for(let i = 0; i < numerosVetor.length; i++){

        soma += numerosVetor[i]
    }
    let media = (soma / numerosVetor.length).toFixed(2).replace('.', ',')
    console.log(`A média aritmética é igual a ${media}.`)

}

mediaAritmetica(vetor)