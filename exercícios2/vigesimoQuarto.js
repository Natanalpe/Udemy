

function contarCaractere(caractere, frase) {
    
    let resultado = 0
    
    for(let i = 0; i < frase.length; i++) {
        if(frase.charAt(i) === caractere) {
            resultado++
        }
    }
    return console.log(resultado)
}

contarCaractere("r", "A sorte favorece os audazes") // retornará 2
contarCaractere("c", "Conhece-te a ti mesmo") // retornará 1