// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
// considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
// de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
// idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function planoDeSaude(idade) {

    const valorPadrao = 100

    if(idade <= 9) {
        
        console.log(`O valor total será : R$ ${valorPadrao + 80}`)

    } else if (idade >= 10 && idade <= 30) {
        
        console.log(`O valor total será : R$ ${valorPadrao + 50}`)

    } else if (idade > 30 && idade <= 60) {

        console.log(`O valor total será : R$ ${valorPadrao + 95}`)

    } else if (idade > 60) {

        console.log(`O valor total será : R$ ${valorPadrao + 130}`)

    }
}

planoDeSaude(9);
planoDeSaude(10);
planoDeSaude(11);
console.log('');
planoDeSaude(29);
planoDeSaude(30);
planoDeSaude(31);
console.log('');
planoDeSaude(59);
planoDeSaude(60);
planoDeSaude(61);
