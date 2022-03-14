// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function verify(num){

    impares = 0
    pares = 0

    for(let i = 0; i < num.length; i++) {

        if(num[i] % 2 == 0) {
            pares++
        }else{
            impares++
        }
    }
    console.log(`Impares: ${impares}\nPares: ${pares}`)
}

verify(numeros)