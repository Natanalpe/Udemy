function tratarErroELancar(erro) {
    throw new Error('Erro ao imprimir')
    //throw 10
    //throw true
    //throw 'mensagem'
    /* 
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    } */
}

function imprimitNomeGritado(obj) {
    try{
       console.log(obj.name.toUpperCase() + '!!!')
    } catch(e) {
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Natan'}
//const obj = { name: 'Natan'} forma correta

imprimitNomeGritado(obj)