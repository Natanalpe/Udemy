const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'


console.log(resultado(2));
console.log(resultado(7));
console.log(resultado(6.9));
console.log(resultado(7.1));
console.log(resultado(-2));
console.log(resultado(0));
console.log(resultado(2 * 4))

//outra oção para função arrow

const resultado2 = nota2 => {
    return nota2 >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log()
console.log(resultado2(2));
console.log(resultado2(7));
console.log(resultado2(6.9));
console.log(resultado2(7.1));
console.log(resultado2(-2));
console.log(resultado2(0));
console.log(resultado2(2 * 4))