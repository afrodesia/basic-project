require.config({
    baseUrl: "assets/js",    
    paths: {
        'jquery': 'vendor/jquery/jquery',
        'underscore': 'vendor/backbone/underscore',
        'backbone': 'vendor/backbone/backbone',
        'bootstrap': 'vendor/bootstrap/bootstrap.min',
    },
    shim: {
        'jquery': { exports: '$' },
        'backbone': { 'deps': ['underscore', 'jquery'], 'exports': 'Backbone' },
        'bootstrap': ['jquery']
    },
    deps: ['app-backbone']
});
