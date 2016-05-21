/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'app':                        'dev/app', // 'dist',
        '@angular':                   'node_modules/@angular',
        '@angular2-material':          'node_modules/@angular2-material',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        'rxjs':                       'node_modules/rxjs'
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'app':                        { main: 'main.js',  defaultExtension: 'js' },
        'rxjs':                       { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' }
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

    // Add package entries for angular packages
    ngPackageNames.forEach(function(pkgName) {
        packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
    });
    // Add package entries for angular packages
    materialPackageNames.forEach(function(pkgName) {
        packages['@angular2-material/'+pkgName] = { format: 'cjs', main: pkgName + '.js', defaultExtension: 'js' };
    });
    var config = {
        map: map,
        packages: packages
    };
    System.config(config);
})(this);