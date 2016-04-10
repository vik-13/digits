module.exports = function() {
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
            scripts: 'dev/app',
            stylesheets: 'dev/stylesheets',
            images: 'dev/images',
            fonts: 'dev/fonts'
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