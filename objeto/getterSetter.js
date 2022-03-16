const sequencia = {
    _valor: 1, // _ convencao (essa é uma variavel que sera acesada apenas internamente, mas nada impedirá de alguem alterar seu valor)
    get valor() {return this._valor++},
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // ira ignorar porque seu valor é menor
console.log(sequencia.valor, sequencia.valor)
