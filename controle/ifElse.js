const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(2);
imprimirResultado(10);
imprimirResultado('Epa!'); //passara pelo 'if' e o resultado será false
//logo ele cairá direto no 'else'.