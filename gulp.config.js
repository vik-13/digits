module.exports = function() {
    return {
        sources: {
            index: 'src/index.html',
            tsScripts: [
                //'typings/index.d.ts',
                'src/app/**/*.ts'
            ],
            jsScripts: 'src/app/**/*.js',
            stylesheets: [
                'src/app/**/*.scss',
                'src/assets/stylesheets/**/*.scss'
            ],
            images: 'src/assets/images/**/*',
            fonts: 'src/assets/fonts/**/*',
            templates: 'src/app/**/*.html',
            vendors: [
                'node_modules/es6-shim/es6-shim.min.js',
                'node_modules/core-js/client/shim.min.js',
                'node_modules/zone.js/dist/zone.js',
                'node_modules/reflect-metadata/Reflect.js',
                'node_modules/systemjs/dist/system.src.js'
            ]
        },
        dev: {
            index: 'dev',
            scripts: 'dev/app',
            stylesheets: 'dev/stylesheets',
            images: 'dev/images',
            fonts: 'dev/fonts',
            templates: 'dev/app',
            vendors: 'dev/vendor'
        }
    };
};