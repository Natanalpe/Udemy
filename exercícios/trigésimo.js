// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.


vetor = [5, 2, 7, 9, 14, 8, 5]

function verifyMaiorMenor(numerosVetor) {

    maior = numerosVetor[0]
    menor = numerosVetor[0]

    for(let i = 0; i < numerosVetor.length; i++) {

        if(numerosVetor[i] > maior) {
            maior = numerosVetor[i]

        } else if(numerosVetor[i] < menor) {
            menor = numerosVetor[i]
        }
    }
    console.log(`O maior é : ${maior}\n O menor é: ${menor}`)
}

verifyMaiorMenor(vetor)