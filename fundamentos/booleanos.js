let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1
console.log(!!isAtivo);

isAtivo = 0;
console.log(!!isAtivo);

console.log('os verdadeiros...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...')
console.log(!!(isAtivo = 0));
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo =false));

console.log('===')
console.log(!!('' || null || 0 || ' '));

let nome = '';
console.log(nome || 'desconhecido');
let nome2 = 'Natan';
console.log(nome2 || 'desconhecido');