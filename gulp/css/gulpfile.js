const { series } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    // só é preciso indicar o index porque dentro dele
    // já há os imports dos outros scsss
    return gulp.src('src/sass/index.scss')
        // convertendo todo o sass para css
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss({ "uglyComments": true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}
function copiarHTML() {

    return gulp.src('src/index.html')
        .pipe(concat('index.min.html'))
        .pipe(gulp.dest('build'))
}

exports.default = series(transformacaoCSS, copiarHTML)