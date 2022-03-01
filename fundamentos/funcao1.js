//função sem retorno.
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3);
imprimirSoma(4);
imprimirSoma(4, 4, 7, 1, 4, 0);//utilizara apenas os dois primeiros.
imprimirSoma();


//função com retorno
function soma(a, b = 1){
    return (
        a + b
    )
}

console.log(soma(2, 3));
console.log(soma(2));