function receberSomenteOsParesDeIndicesPares(elemento) {
    
    let resultado = []

    for(let i = 0; i < elemento.length; i += 2) {
       const resultadoLacoFor = elemento[i] % 2 === 0

       if(resultadoLacoFor)
            resultado.push(elemento[i])
    }
    return resultado
}



console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará []
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]
