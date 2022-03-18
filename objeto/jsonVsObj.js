const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c}}
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
//console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) // atributos de JSON devem ser delimitados por aspas simples

console.log(JSON.parse('{ "a": 1, "b": "string", "c": true}'))