const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function removerVogal (elemento) {

    vogais.forEach(vogal => elemento = elemento.replace(vogal, ''));

    return console.log(elemento)
}

removerVogal("Cod3r") // retornarĂ¡ "Cd3r"
removerVogal("Fundamentos") // retornarĂ¡ "Fndmnts"