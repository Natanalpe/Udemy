// 35) Crie dois vetores chamados vetorPilha e vetorAdiciona. Inicialmente, o vetorPilha conterá cinco elementos
// inteiros: [1, 2, 3, 4, 5]. Você deverá adicionar os valores contidos no vetorAdiciona [6, 7, 8, 9, 10] ao vetor pilha
// e mostrá-los no console. É importante lembrar que o método Push retorna somente o tamanho do Vetor. Ao
// final das operações imprima os vetores no console.

let vetorPillha = [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

// metodo 1
// vetorPillha.push(vetorAdiciona)
// console.log(vetorPillha)

// metodo 2
// vetorPillha.push.apply(vetorPillha, vetorAdiciona)
// console.log(vetorPillha)

// metodo 3
Array.prototype.push.apply(vetorPillha, vetorAdiciona)
console.log(vetorPillha)

// metodo 4 porem não retorna um vetor
// let adicionando = vetorPillha + vetorPillha
// console.log(adicionando)