// coleçao dinânimca de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    propietario: {
        nome: 'Natan',
        idade: 40,
        endereco: {
            logradouro: 'rua a',
            numero: 123
        },
        condutores: [{
            nome: 'Junior',
            idade: 19
        }, {
            nome: 'Ana',
            ideade: 20
        }],
        calcularValorSeguro: function() {
            //...
        }
    }
}

carro.propietario.endereco.numero = 1000
carro['propietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.condutores
delete carro.propietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
//console.log(carro.condutores.length) ERRO