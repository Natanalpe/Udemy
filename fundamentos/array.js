const valores = [7.7, 2, 5, 12];

console.log(valores[0], valores[3]);
console.log(valores[4]); //undefined

valores[4] = 10;
console.log(valores);
console.log(valores.length);


valores.push({id:3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop());
delete valores[0]
console.log(valores);

console.log(typeof valores);