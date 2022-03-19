
function soNumbers(conteudo) {

    return typeof conteudo == 'number'

}

let conteudo = [1, 2, 3, '4', 5, 'a'].filter(soNumbers)
console.log(conteudo)