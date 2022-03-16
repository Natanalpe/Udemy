// usando notação literal

const obj1 = {

}
console.log(obj1)

// objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDescoto = () => {
        return (preco * (1 - desc)).toFixed(2)
    }
}
const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2370.99, 0.2)
console.log(p1.getPrecoComDescoto(), p2.getPrecoComDescoto())

// Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30 * (30 - faltas))
        }
    }
}

const f1 = criarFuncionario('João', 9870, 4)
const f2 = criarFuncionario('Maria', 11870, 2)
console.log(f1.getSalario(), f1.getSalario())


// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa queretorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)