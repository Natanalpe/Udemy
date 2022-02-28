const peso1 = 1.0;
const peso2 = Number('2.0');
const peso3 = 2.1;

console.log(peso1, peso2, peso3);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));
console.log(Number.isInteger(peso3));

const avaliacao1 = 9.321;
const avaliacao2 = 5.692;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2)

if(media >= 7) {
    console.log(media.toFixed(2), " Passou!!!");
} else {
    console.log(media.toFixed(2), " Reprovou!!!");
}

console.log(media.toString(2));//converte para binário.
console.log(typeof Number)