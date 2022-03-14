// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
// aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
// aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
// "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function media(codigo, maiorNota, nota2, nota3) {

    mediaNotas = ((maiorNota * 4 + nota2 * 3 + nota3 * 3) / 10).toFixed(2)

    if(mediaNotas >= 5) {
        console.log(`codigo: ${codigo}\nMelhor nota: ${maiorNota}\nnota dois: ${nota2}\nnota três: ${nota3}\nMedia: ${mediaNotas}\nAPROVADO`)
    } else {
        console.log(`codigo: ${codigo}\nMelhor nota: ${maiorNota}\nnota dois: ${nota2}\nnota três: ${nota3}\nMedia: ${mediaNotas}\nREPROVADO`)
    }
}

media(1, 8, 5, 6)
console.log()
media(2, 5.7, 5, 4)