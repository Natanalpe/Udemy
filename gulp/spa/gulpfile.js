const gulp = require('gulp')
const { series, parallel } = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')

module.exports.default = series(
    // Ordem de inicialização
    // 1 - 'appHTML' / 'appCSS' ... / 'depsCSS', 'depsFonts'
    // e quando terminar
    // será 'servidor' e logo em sequida 'monitorarArquivos'
    parallel(
        series(
            appHTML,
            appCSS,
            appJS,
            appIMG
        ),
        series(
            depsCSS,
            depsFonts
        )
    ),
    servidor,
    monitorarArquivos
)