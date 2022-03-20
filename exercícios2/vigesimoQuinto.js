

function buscarPalavrasSemelhantes(chave, arrayDeStrings) {

    let resultado = []

    for (let strings of arrayDeStrings)
        if(strings.includes(chave))
            resultado.push(strings)
            
    return console.log(resultado)
}


buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []