// par nome/valor

const saudacao = 'Olá'; //contexto léxico 1.

function exec() {
    const saudacao = 'Iae' // contexto léxoco 2.
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Natan',
    idade: '22',
    peso: 123,
    endereco: {
        logradouro: 'ali',
        numero: '42'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);