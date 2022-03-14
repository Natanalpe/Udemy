// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

vetor = [1, -2, 3, 4, -5, 6, 7, -8, -9, 10]


function verifyNegatives(numerosVetor) {

    negativos = 0

        for(let i = 0; i < numerosVetor.length; i++) {

            if(numerosVetor[i] < 0) {
                negativos++
            }
        }
        console.log(`A quantidade de números negativos é ${negativos}.`)
}

verifyNegatives(vetor)