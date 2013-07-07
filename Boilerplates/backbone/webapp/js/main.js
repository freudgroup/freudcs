/*!
 * Main
 * Contains the requirejs configuration and initialises the app
 */
requirejs.config({
    paths: {
        jquery: "libs/jquery",
        text: "libs/text",
        backbone: "libs/backbone",
        underscore: 'libs/underscore-min',
        templates: '../templates',
        model: 'model/model',
        landingView: 'view/landing/landing-view',
        transitionManager: 'utils/transition-manager',
    },
    shim: {
        'backbone': {
            // These script dependencies should be loaded before loading backbone.js
            deps: ['underscore', 'jquery'],
            // Once loaded, use the global 'Backbone' as the module value.
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

/**
 * Initialization of the app.
 */
requirejs([
        'app',
    ],
    function(App) {
        App.initialize();
    }
);