// 39) Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

let vetor1 = [1, 2, 3]
let vetor2 = [4, 5, 6]

function trocaVetores(vetor1, vetor2) {

    [vetor1, vetor2] = [vetor2, vetor1]
    console.log(`${vetor1}\n${vetor2}`)
}

trocaVetores(vetor1, vetor2)