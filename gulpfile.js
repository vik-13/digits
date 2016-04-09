var config = require('./gulp.config');

var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tsProject = tsc.createProject('tsconfig.json');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var ngHtml2js = require('gulp-ng-html2js');
var del = require('del');
var es = require('event-stream');
var mainBowerFiles = require('main-bower-files');

gulp.task('clean-dev', cleanDev);
// gulp.task('clean-release', cleanRelease);
gulp.task('dev', ['clean-dev'], dev);

function cleanDev() {
    return del(config.dev.index);
}

// function cleanRelease() {
//     return del(config.release.index);
// }

function dev() {
    return es.merge(
        buildIndex(),
        buildImages(),
        buildFonts()
    );
}

function buildIndex() {
    var appStyles = buildStyles(),
        appScripts = buildScripts(),
        vendorScripts = buildVendorScripts();

    return gulp.src(config.sources.index)
        .pipe(gulp.dest(config.dev.index))
        .pipe(inject(vendorScripts, { relative: true, name: 'vendor' }))
        .pipe(inject(appScripts, { relative: true }))
        .pipe(inject(appStyles, { relative: true }))
        .pipe(gulp.dest(config.dev.index));
}

function buildImages() {

}

function buildFonts() {

}

function buildStyles() {
    return gulp.src(config.sources.stylesheets)
        .pipe(sass())
        // .pipe(concat('app.css'))
        .pipe(gulp.dest(config.dev.stylesheets));
}

function buildScripts() {
    var buildTsScripts = gulp.src(config.sources.tsScripts)
            .pipe(tsc(tsProject))
            .pipe(gulp.dest(config.dev.scripts)),
        buildJsScripts = gulp.src(config.sources.jsScripts)
            .pipe(gulp.dest(config.dev.scripts));

    return es.merge(
        buildTsScripts,
        buildJsScripts
    );
}

function buildVendorScripts() {

}