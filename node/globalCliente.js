require('./global')
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita!' // O freeze bloqueou e o tornou const
console.log(MinhaApp.nome)