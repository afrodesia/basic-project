require.config({
    baseUrl: "assets/js",    
    paths: {
        'jquery': 'vendor/jquery/jquery',
        'bootstrap': 'vendor/bootstrap/bootstrap.min',
        'angular': 'vendor/angular/angular.min',
        'angular-route': 'vendor/angular/angular-route.min',
        'angularAMD': 'vendor/angular/angularAMD'
    },
    shim: {
        'jquery': { exports: '$' }, 
        'angularAMD': ['angular'], 
        'angular-route': ['angular'],
        'bootstrap': ['jquery']
    },
    deps: ['app-angular']
});
