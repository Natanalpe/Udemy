const pilotos = ['a', 'b', 'c', 'd']
pilotos.pop()
console.log(pilotos)

pilotos.push('e')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('f')
console.log(pilotos)

// splice pode adicionar e remover elementos dentro de um array
pilotos.splice(2, 0, 'g', 'h')
console.log(pilotos)

// removendo com splice
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

const algunsPilotos2 =  pilotos.slice(1, 4)
console.log(algunsPilotos2)