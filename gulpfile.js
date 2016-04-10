var config = require('./gulp.config')();

var gulp = require('gulp'),
    tsc = require('gulp-typescript'),
    tsProject = tsc.createProject('tsconfig.json'),
    filter = require('gulp-filter'),
    uglify = require('gulp-uglify'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    del = require('del'),
    es = require('event-stream');

gulp.task('clean-dev', cleanDev);
gulp.task('dev', ['clean-dev'], dev);

function cleanDev() {
    return del(config.dev.index);
}

function dev() {
    return es.merge(
        buildScripts(),
        buildIndex(),
        buildImages(),
        buildFonts()
    );
}

function buildIndex() {
    return gulp.src(config.sources.index)
        .pipe(inject(buildVendorScripts(), { relative: true, name: 'vendor' }))
        .pipe(inject(buildStyles(), { relative: true }))
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

function buildVendorScripts() {
    return gulp.src(config.sources.vendors)
        .pipe(gulp.dest(config.dev.vendors));
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