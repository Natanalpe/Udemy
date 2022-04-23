const gulp = require('gulp')
const series = gulp.series
const parallel = gulp.parallel

function antes(cb) {
    console.log('Antes 1')
    return cb()
}

function antes2(cb) {
    console.log('Antes 2')
    return cb()
}

function copiar(cb) {

    // pegara qualquer aruivo que tenha dentro da pasta A
    // e passara para a pasta B
    gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

        // .pipe(imagePelaMetade())
            // .pipe(ImageEmpretoEBranco())
        // .pipe(transfotmacaoA())
        // .pipe(transfotmacaoB())
        // .pipe(transfotmacaoC())
    return cb()
}

function fim(cb) {
    console.log('Fim!')
    return cb()
}


module.exports.default = series(
    parallel(antes, antes2),
    copiar,
    fim,
)