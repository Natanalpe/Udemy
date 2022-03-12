// 11) As regras para o cálculo dos anos bissextos são as seguintes:
// De 4 em 4 anos é ano bissexto;
// De 100 em 100 anos não é ano bissexto;
// De 400 em 400 anos é ano bissexto;
// Prevalecem as últimas regras sobre as primeiras.
// Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
// mensagem e retornando true ou false.

function verificaAnoBissexto(ano) {

    let divisaoPorQuatro = ano % 4
    let divisaoPorCem = ano % 100
    let divisaoPorQuatrocentos = ano % 400

    if(divisaoPorQuatro == 0 && divisaoPorCem == 0 && divisaoPorQuatrocentos == 0) {
        console.log(true, ' : O ano é bisexto.')
    } else {
        console.log(false, ' : O ano não é bissexto.')
    }
}

verificaAnoBissexto(1992);
verificaAnoBissexto(2000);
verificaAnoBissexto(1900);