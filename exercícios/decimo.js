// 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
// ou false

function calculo(a) {
    
    let num = a % 3

    if(num == 0) {
        console.log(true, ` : O número ${a} é divisivel por 3`)
    } else {
        console.log(false, `: O número ${a} não é divisivel por 3`)
    }
}

calculo(1);
calculo(2);
calculo(3);