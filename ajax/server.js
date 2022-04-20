// Por padrão o servidor irá rodar o 'index.html'

const bodyParser = require('body-parser')
const express = require('express')
const app = express()


app.use(express.static('.'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const multer = require('multer')

// disk Storage serve para personalizar a pasta que 
// ira salvar os arquivos e o nome do arquivo
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        
        // cria um nome para o arquivo adicionando a data antes do nome original
        // para evitar duplicidade de nomes
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {

    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.get('/teste', (req, res) => res.send(new Date + " Ok"))
app.listen(8080, () => console.log('Executando...'))