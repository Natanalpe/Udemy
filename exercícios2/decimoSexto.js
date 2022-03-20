
let calcularAnoBissexto = (ano) => (ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0) ? console.log(`O ano ${ano} é bissexto`) : console.log(`O ano ${ano} não é bissexto`)


calcularAnoBissexto(2020) // retornará true
calcularAnoBissexto(2100) // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
