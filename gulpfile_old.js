var gulp = require('gulp');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var inject = require('gulp-inject');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var ngHtml2js = require('gulp-ng-html2js');
var del = require('del');
var es = require('event-stream');
var mainBowerFiles = require('main-bower-files');


var paths = {};
paths.dirSrc = "src";
paths.dirApp = paths.dirSrc + '/app';
paths.dirAssets = paths.dirSrc + '/assets';
paths.dirVendor = 'vendor';
paths.dirBuild = 'build';
paths.dirRelease = 'release';

paths.srcIndex = paths.dirSrc + '/index.html';
paths.srcTemplates = paths.dirApp + '/**/*.tpl.html';
paths.srcScripts = paths.dirApp + '/**/*.js';
paths.srcStyles = [
    paths.dirAssets + '/stylesheets/**/*.scss',
    paths.dirApp + '/**/*.scss'
];

paths.srcIcons = [
    paths.dirSrc + '/favicon.ico',
    paths.dirSrc + '/apple-touch-icon-precomposed.png'
];

paths.srcAssets	= paths.dirSrc + '/assets';
paths.srcAssetsImgages = paths.srcAssets + '/images/**/*';
paths.srcAssetsFonts = paths.srcAssets + '/fonts/**/*';

paths.dirBuildAssets = paths.dirBuild + '/assets';
paths.dirBuildAssetsJavascript = paths.dirBuildAssets + '/javascript';
paths.dirBuildAssetsStylesheets = paths.dirBuildAssets + '/stylesheets';
paths.dirBuildAssetsImages	= paths.dirBuildAssets + '/images';
paths.dirBuildAssetsFonts	= paths.dirBuildAssets + '/fonts';

paths.dirReleaseAssets = paths.dirRelease + '/assets';
paths.dirReleaseAssetsJavascript = paths.dirReleaseAssets + '/javascript';
paths.dirReleaseAssetsStylesheets = paths.dirReleaseAssets + '/stylesheets';
paths.dirReleaseAssetsImages	= paths.dirReleaseAssets + '/images';
paths.dirReleaseAssetsFonts	= paths.dirReleaseAssets + '/fonts';


var pipes = {};

pipes.scriptedTemplates = function() {
    return gulp.src(paths.srcTemplates)
        .pipe(ngHtml2js({
            moduleName: 'templates'
        }));
};

pipes.buildStyles = function() {
    return gulp.src(paths.srcStyles)
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.dirBuildAssetsStylesheets));
};

pipes.buildScripts = function() {
    var builtScripts = gulp.src(paths.srcScripts)
        .pipe(gulp.dest(paths.dirBuildAssetsJavascript));

    var buildScriptedTemplates = pipes.scriptedTemplates()
        .pipe(concat('app-templates.js'))
        .pipe(gulp.dest(paths.dirBuildAssetsJavascript))
        ;

    return es.merge(
        builtScripts,
        buildScriptedTemplates
    );
};

pipes.buildVendorScripts = function() {
    return gulp.src(mainBowerFiles())
        .pipe(gulp.dest(paths.dirBuild + '/vendor'));
};

pipes.buildIndex = function() {
    var appStyles = pipes.buildStyles();
    var appScripts = pipes.buildScripts();
    var vendorScripts = pipes.buildVendorScripts();

    return gulp.src(paths.srcIndex)
        .pipe(gulp.dest(paths.dirBuild))
        .pipe(inject(vendorScripts, { relative: true, name: 'vendor' }))
        .pipe(inject(appScripts, { relative: true }))
        .pipe(inject(appStyles, { relative: true }))
        .pipe(gulp.dest(paths.dirBuild))
        ;
};

pipes.buildImages = function() {
    return gulp.src(paths.srcAssetsImgages)
        .pipe(gulp.dest(paths.dirBuildAssetsImages));
};

pipes.buildIcons = function() {
    return gulp.src(paths.srcIcons)
        .pipe(gulp.dest(paths.dirBuild));
};

pipes.buildFonts = function() {
    return gulp.src(paths.srcAssetsFonts)
        .pipe(gulp.dest(paths.dirBuildAssetsFonts));
};

pipes.build = function() {
    return es.merge(
        pipes.buildIndex(),
        pipes.buildImages(),
        pipes.buildIcons(),
        pipes.buildFonts()
    );
};

pipes.releaseStyles = function() {
    return gulp.src(paths.srcStyles)
        .pipe(sass())
        .pipe(concat('app.css'))
        .pipe(gulp.dest(paths.dirReleaseAssetsStylesheets));
};

pipes.releaseScripts = function() {
    var builtScripts = gulp.src(paths.srcScripts)
        .pipe(concat('app-scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dirReleaseAssetsJavascript));

    var buildScriptedTemplates = pipes.scriptedTemplates()
        .pipe(concat('app-templates.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.dirReleaseAssetsJavascript))
        ;

    return es.merge(
        builtScripts,
        buildScriptedTemplates
    );
};

pipes.releaseVendorScripts = function() {
    var builtStyles = gulp.src(mainBowerFiles())
        .pipe(filter('**/*.css'))
        .pipe(concat('app-vendor.css'))
        .pipe(gulp.dest(paths.dirRelease + '/vendor'));

    var buildScripts = gulp.src(mainBowerFiles())
        .pipe(filter('**/*.js'))
        .pipe(concat('app-vendor.js'))
        .pipe(gulp.dest(paths.dirRelease + '/vendor'));

    return es.merge(
        builtStyles,
        buildScripts
    );
};

pipes.releaseIndex = function() {
    var appStyles = pipes.releaseStyles();
    var appScripts = pipes.releaseScripts();
    var vendorScripts = pipes.releaseVendorScripts();

    return gulp.src(paths.srcIndex)
        .pipe(gulp.dest(paths.dirRelease))
        .pipe(inject(vendorScripts, { relative: true, name: 'vendor' }))
        .pipe(inject(appScripts, { relative: true }))
        .pipe(inject(appStyles, { relative: true }))
        .pipe(gulp.dest(paths.dirRelease))
        ;
};

pipes.releaseImages = function() {
    return gulp.src(paths.srcAssetsImgages)
        .pipe(gulp.dest(paths.dirReleaseAssetsImages));
};

pipes.releaseIcons = function() {
    return gulp.src(paths.srcIcons)
        .pipe(gulp.dest(paths.dirRelease));
};

pipes.releaseFonts = function() {
    return gulp.src(paths.srcAssetsFonts)
        .pipe(gulp.dest(paths.dirReleaseAssetsFonts));
};

pipes.release = function() {
    return es.merge(
        pipes.releaseIndex(),
        pipes.releaseImages(),
        pipes.releaseIcons(),
        pipes.releaseFonts()
    );
};

gulp.task('clean-build', function() {
    return del(paths.dirBuild);
});

gulp.task('clean-release', function() {
    return del(paths.dirRelease);
});


gulp.task('build', ['clean-build'], pipes.build);

gulp.task('release', ['clean-release'], pipes.release);

gulp.task('default', ['build']);