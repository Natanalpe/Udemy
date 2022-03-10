// closure é o escopo criado quando uma função 
// é decladada
// Esse escopo permite a função acessar e manipular 
// variáveis externas à função

//contexto léxico em açao

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())