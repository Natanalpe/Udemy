let num1 = 1
let num2 = 2

num1++
console.log(num1);

--num1 // ou num1--
console.log(num1)

console.log(++num1 === num2--) // a comparação ocorre antes da mudança de num2
console.log(num1 === num2)


// PDF
/* 
O operador de exponenciação.
O ES7 nos trouxe o tão esperando operador de exponenciação! Veio de forma
simples e intuitiva facilitar o uso desse cálculo matemático para nós, amantes do
Javascript.
Para utilizar a exponenciação da maneira antiga:
*/
let exp = Mathpow(2, 3) //o rimeiro parametro é baseado no segundo expoente

console.log(exp) // 2 elevado a 3 é igual a 8

/*
Antes deveríamos fazer o usa de uma função do objeto Math.
O ES7 mudou isso, agora podemos utilizar o operador próprio, assim:
*/

let exp2 = 2 ** 3 // o primeiro valor representa e a base e o segundo o expoente 

console.log(exp2) // 2 elevado a 3 igual 8

/*
Representado por dois asteriscos (**) o operador nos trouxe outra possibilidade
interessante que podemos chamar de atribuição exponencial, assim:
*/

let base = 2
base **= 3 //eleva o valor armazenado na vase à terceira potência.

console.log(base) // 2 elevado a 3 é igal a 8
/*
Podemos ler assim o código da seguinte maneira: base = base ** 3
E ainda podemos trabalhar com expoentes negativos, assim:
*/

let exp3 = 2 ** -3 //com expoente negativo

console.log(exp3) //2 elevado a -3 igual a 0.125

/*
E assim o Javascript continua evoluindo e se reinventando para tornar-se cada vez
mais robusta e funcional!
*/