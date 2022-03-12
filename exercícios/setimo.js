// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
// elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
// parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
// -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
// que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
// “Delta é negativo”.
// Δ =  b^2 - 4 . a . c
// a = 3 || b = -5 || c = 12

function bhaskara(ax2, bx, c) {

    let delta = (bx ** 2) - (4 * ax2 * c) 
    let valorX1 = (- bx + Math.sqrt(delta)) / (2 * ax2)
    let valorX2 = (- bx - Math.sqrt(delta)) / (2 * ax2)

    //verificando e trocando o sinal caso A, B ou C sejam negativos.
    if(ax2 < 0) {
        ax2 = ax2 * -1
    } else if (bx < 0) {
        bx = bx * -1
    } else if(c < 0) {
        c = c * -1
    }

    // valor de Δ
    if(delta < 0) {
        console.log('Delta é negativo')
    } else {
        console.log('O valor de Delta (Δ) é: ', delta)
        console.log('O valor de X 1 é: ', valorX1)
        console.log('O valor de X 2 é: ', valorX2)
    }
}


bhaskara(3, -5, 12)
bhaskara(4, 2, -6)