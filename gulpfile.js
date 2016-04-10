var config = require('./gulp.config')();

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tsProject = tsc.createProject('tsconfig.json'),
    filter = require('gulp-filter'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    del = require('del'),
    es = require('event-stream');

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
        buildStyles(),
        buildScripts(),
        buildImages(),
        buildFonts()
    );
}

function buildIndex() {
    return gulp.src(config.sources.index)
        .pipe(gulp.dest(config.dev.index));
}

function buildImages() {
    return gulp.src(config.sources.images)
        .pipe(gulp.dest(config.dev.images));
}

function buildFonts() {
    return gulp.src(config.sources.fonts)
        .pipe(gulp.dest(config.dev.fonts));
}

function buildStyles() {
    return gulp.src(config.sources.stylesheets)
        .pipe(sass())
        .pipe(concat('app.css'))
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