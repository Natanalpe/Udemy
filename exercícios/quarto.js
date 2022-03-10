// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function calc(a, b) {
    console.log('R: ' + Math.floor(a / b))
    console.log(`Resto: ${a % b}`)
}

calc(7, 3)