const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')
function monitorarArquivos() {
    return gulp.src('build')
        .pipe(webserver({
            port: 8080,
            // quer que ele abra o Browser ?
            open: true,
            livereload: true,
        }))
}

function servidor(cb) {
    // o que quer monitorar / sempre que o html for alterado
    // a função será chamada para gerar os novos html's
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}