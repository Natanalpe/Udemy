

function inverso(a) {

    let parametro = typeof a
    
    if(parametro == "string") {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof a}.`
    } else if (parametro == "boolean") {
        return !a
    } else if (parametro == "number") {
        return a * -1
    }
    

}


console.log(inverso(1))
console.log(inverso('a'))
console.log(inverso(true))
console.log(inverso(false))