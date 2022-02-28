const escola = "Cod3r"

console.log(escola.charAt(4));

//não retornará nada pois não há caractere na posição 5.
console.log(escola.charAt(5));


//mostrara o valor na tabela ASCII
//https://web.fe.up.pt/~ee96100/projecto/Tabela%20ascii.htm
console.log(escola.charCodeAt(3))

console.log(escola.indexOf('3'));

console.log(escola.substring(1, 3));

console.log('Escola '.concat(escola).concat("!"));

console.log(escola.replace(3, 'e'));

//gera um Array a cada ','.
console.log('ana, Maria, Pedro'.split(','));    

