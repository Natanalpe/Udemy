// 40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

//          [D, C, D, B,  A ]
let vetor = [3, 6, 2, 7, 9.5]

function verificarNotas(vetor) {

    let resultado = ''

    vetor.forEach(element => {
        if(element >= 0 && element <= 4.9) {
            console.log('D')
        } else if(element >= 5 && element <= 6.9) {
            console.log('C')
        } else if(element >= 7 && element <= 8.9) {
            console.log('B')
        } else if(element >= 9 && element <= 10) {
            console.log('A')
        }
    });
    return resultado
}

verificarNotas(vetor)