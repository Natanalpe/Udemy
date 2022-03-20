
function funcaoDaSorte(numero) {
    
    let numeroSorteado = Math.floor(Math.random() * (10 - 0) + 1)

    if(numeroSorteado == numero) {
        return `Parabéns! O número sorteado foi o ${numeroSorteado}`    
    } else {
        return `Que pena! O número sorteado foi o ${numeroSorteado}`
    }
}




console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))
