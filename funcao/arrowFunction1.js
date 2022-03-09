let dobro = function (a) {
    return 2 * a
}


// Arrow function
dobro = () => {
    return 2 * a
}


// ainda mais simplificado
// pode ser usado assim pois só tem um parametro
dobro = a => 2 * a // return está implicíto
console.log(dobro(Math.PI))


let  ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // Possui um param
console.log(ola())
