module.export = function() {
    return {
        sources: {
            index: 'src/index.html',
            tsScripts: 'src/app/**/*.ts',
            jsScripts: 'src/app/**/*.js',
            stylesheets: [
                'src/app/**/*.scss',
                'src/assets/stylesheets/**/*.scss'
            ],
            images: '/src/assets/images/**/*',
            fonts: '/src/assets/fonts/**/*'
        },
        dev: {
            index: 'dev',
            scripts: 'dev/assets/javascript',
            stylesheets: 'dev/assets/stylesheets',
            images: 'dev/assets/images',
            fonts: 'dev/assets/fonts'
        },
        release: {
            index: 'release',
            scripts: 'release/assets/javascript',
            stylesheets: 'release/assets/stylesheets',
            images: 'release/assets/images',
            fonts: 'release/assets/fonts'
        }
    };
};