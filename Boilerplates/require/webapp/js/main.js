/*!
 * main
 * this Module strictly loads require configuration 
 * - paths to each of the code AMD libraries
 * - shim config for non-AMD dependencies
 * - loads the main app module
 */
requirejs.config({
    shim : {
        // ADD ALL non AMD dependencies
        // e.g.
        // "alpha" : ['jquery']
    },
    paths : {
        jquery: "libs/jquery",
        require: "libs/require",
        app: "app"
        // ADD Paths for added libraries
        // e.g.
        // "alpha" :   "libs/plugins/jquery.alpha"
    }
});

require(['app'], function(app) {
    //this module should be clean for code 
});