var gulp = require('gulp');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var es = require('event-stream');
var htmlmin = require('gulp-htmlmin');
var cssmin = require('gulp-clean-css');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');
var merge = require('merge-stream');
var argv = require('yargs').argv;
var replace = require('gulp-replace');
var ngannotate = require('gulp-ng-annotate');

var backEndHost = argv.backEndHost ? argv.backEndHost : 'localhost:8080';
if (argv.cloud) {
    backEndHost = 'cloud.2me.net.br';
};

gulp.task('clean', function () {
    return gulp.src('dist/')
    .pipe(clean());
});

gulp.task('jshint', function () {
    return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('uglify', function () {
    return es.merge([
        gulp.src([
        'lib/angular/angular.min.js', 
        'lib/angular-locale-pt-br/angular-locale_pt-br.js',
        'lib/angular-bootstrap/ui-bootstrap.min.js',
        'lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
        'lib/angular-ui-router/release/angular-ui-router.min.js',
        'lib/ui-navbar/release/js/ui-navbar.min.js',
        'lib/angular-cookies/angular-cookies.min.js',
        'lib/ng-currency/dist/ng-currency.js',
        'lib/angular-animate/angular-animate.min.js',
        'lib/angular-sanitize/angular-sanitize.min.js',
        'lib/ngToast/dist/ngToast.min.js']).pipe(concat('dependencies.min.js')),
        es.merge([
            gulp.src('js/app.js').pipe(replace('localhost:8080', backEndHost)),
            gulp.src(['js/**/*.js', '!js/app.js'])
        ])
        .pipe(ngannotate()).pipe(uglify()).pipe(concat('scripts.min.js'))
    ])
    .pipe(gulp.dest('dist/js'));
});

gulp.task('htmlmin', function () {
    var view = gulp.src('view/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/view'));

    var index = gulp.src('index-prod.html')
    .pipe(rename('index.html'))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/'));

    return merge(view, index);
});

gulp.task('cssmin', function () {
    return es.merge([
        gulp.src([
        'css/bootstrap.min.css', 
        'lib/ngToast/dist/ngToast.min.css',
        'lib/ngToast/dist/ngToast-animations.min.css']),
        gulp.src('css/app.css').pipe(cssmin())
    ])
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('resources', function () {

    var imgs = gulp.src('img/**/*.*')
    .pipe(gulp.dest('dist/img'));

    var fonts = gulp.src(['fonts/*.*'])
    .pipe(gulp.dest('dist/fonts'));

    return merge(imgs, fonts);
});

gulp.task('default', function (callback) {
    return runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cssmin', 'resources'], callback);
});