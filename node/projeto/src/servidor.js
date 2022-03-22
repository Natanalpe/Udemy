const porta = 3004

const express = require('express')
const app = express()

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 }) // Vai se convertido para JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})