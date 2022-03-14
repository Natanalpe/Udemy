// 33) Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
// quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
// Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
// mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

vetorInteiro = [1, 2, 3, 4, 5]
vetorString = ['6', '7', '8', '9', '10']
vetorDouble = [11.1, 12.2, 13.3, 14.4, 15.5]

//primeira função
function concatenarVetores(vetor1, vetor2, vetor3) {
    
    let concatenar1 = vetor1.concat(vetor2.concat(vetor3))
    let concatenar2 = vetor1.concat(vetor2).concat(vetor3)

    let concatenar3 = vetor1 + vetor2 + vetor3

    let concatenar4 =  vetor1.concat(vetor2 + vetor3)


    console.log(concatenar1)
    console.log(concatenar2)
    console.log(concatenar3)
    console.log(concatenar4)
}

concatenarVetores(vetorInteiro, vetorString, vetorDouble);

//segunda função
function concatenarVetores2 (...arguments) {

    saida = []

    for(let i = 0; i < arguments.length; i++){
        saida = saida.concat(arguments[i])
    }
    console.log(saida)
}

concatenarVetores2(vetorInteiro, vetorString);