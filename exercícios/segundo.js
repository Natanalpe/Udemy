// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).


function eUmTriangulo(a, b, c) {
    if(a === b && b === a) {
        console.log('O triangulo é Equilátero')
    } else if (a !== b && b !== c && c !== a) {
        console.log('O triangulo é Escaleno')
    } else {
        console.log('O triangulo é Isósceles')
    }
}

eUmTriangulo(6, 6, 6)
eUmTriangulo(2, 5, 2)
eUmTriangulo(3, 5, 7)