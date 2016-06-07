(function(global) {
    var map = {
        'app': 'dev/app',
        '@angular': 'node_modules/@angular',
        '@angular2-material': 'node_modules/@angular2-material',
        'firebase': 'node_modules/firebase/lib/firebase-web.js',
        'angularfire2': 'node_modules/angularfire2',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs': 'node_modules/rxjs'
    };

    var packages = {
        'app': {
            main: 'main.js',
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-in-memory-web-api': {
            defaultExtension: 'js'
        },
        'angularfire2': {
            defaultExtension: 'js',
            main: 'angularfire2.js'
        }
    };
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router',
        'router-deprecated',
        'upgrade'
    ];
    var materialPackageNames = [
        'button',
        'card',
        'checkbox',
        'core',
        'grid-list',
        'icon',
        'input',
        'list',
        'progress-bar',
        'radio',
        'sidenav',
        'toolbar'
    ];

    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/' + pkgName] = {
            main: pkgName + '.umd.js',
            defaultExtension: 'js'
        };
    });

    materialPackageNames.forEach(function(pkgName) {
        packages['@angular2-material/' + pkgName] = {
            format: 'cjs',
            main: pkgName + '.js',
            defaultExtension: 'js'
        };
    });
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);