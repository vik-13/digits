module.exports = function() {
    return {
        sources: {
            index: 'src/index.html',
            tsScripts: [
                'node_modules/angular2/typings/browser.d.ts',
                'src/app/**/*.ts'
            ],
            jsScripts: 'src/app/**/*.js',
            stylesheets: [
                'src/app/**/*.scss',
                'src/assets/stylesheets/**/*.scss'
            ],
            images: '/src/assets/images/**/*',
            fonts: '/src/assets/fonts/**/*',
            templates: '/src/app/**/*.html',
            vendors: [
                'node_modules/es6-shim/es6-shim.min.js',
                'node_modules/systemjs/dist/system-polyfills.js',
                'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js',

                'node_modules/angular2/bundles/angular2-polyfills.js',
                'node_modules/systemjs/dist/system.src.js',
                'node_modules/rxjs/bundles/Rx.js',
                'node_modules/angular2/bundles/angular2.dev.js',
                'node_modules/ng2-material/dist/ng2-material.js',
                'node_modules/angular2/bundles/router.dev.js',

                'node_modules/ng2-material/dist/ng2-material.css',
                'node_modules/ng2-material/dist/font.css'
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