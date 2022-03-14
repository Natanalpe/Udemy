// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações.

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20, 21, 23]

function verify(numerosVetor) {

    dentro = 0
    fora = 0

    for(let i = 0; i < numerosVetor.length; i++) {

        if(numerosVetor[i] > 9 && numerosVetor[i] < 21) {
            
            dentro++
        } else {
            
            fora++
        }
    }
    console.log(`${dentro} números estão dentro do intervalo\n${fora} números estão fora o intervalo`)
}


verify(vetor);