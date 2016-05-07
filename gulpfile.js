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
    es = require('event-stream'),
    tsLint = require('gulp-tslint'),
    browserSync = require('browser-sync'),
    superstatic = require('superstatic');

gulp.task('clean-dev', cleanDev);
gulp.task('compile', compile);
gulp.task('dev', ['clean-dev'], compile);
gulp.task('ts-lint', lint);
gulp.task('serve', ['dev'], serve);

gulp.task('default', ['dev']);

function cleanDev() {
    return del(config.dev.index);
}

function compile() {
    return es.merge(
        buildScripts(),
        buildIndex(),
        buildImages(),
        buildFonts(),
        buildTemplates()
    );
}

function lint() {
    return gulp.src(config.sources.tsScripts)
        .pipe(tsLint())
        .pipe(tsLint.report('prose', {
            emitError: false
        }));
}

function serve() {
    gulp.watch([config.sources.tsScripts,
        config.sources.stylesheets,
        config.sources.templates,
        config.sources.index], ['compile']); //.on('change', browserSync.reload);

    browserSync({
        port: 3000,
        file: ['**/*.js', '**/*.css', '**/*.html'],
        injectChanges: false,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: './dev',
            middleware: superstatic({debug: false})
        }
    });
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

function buildTemplates() {
    return gulp.src(config.sources.templates)
        .pipe(gulp.dest(config.dev.templates));
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