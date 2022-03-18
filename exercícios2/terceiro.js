function calcularSalario (horasPorMes, retornoPorHora) {
    
    let calculo = horasPorMes * retornoPorHora

    return `Salário igual R$ ${calculo}`
  
}

console.log(calcularSalario(100, 10))