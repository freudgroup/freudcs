/**
 * App configuration file
 * Organize and shortcuts all project javascript dependencies paths.
 * It also lets you shim config non AMD depemdencies.
 * Find more documentation here: 
 * http://requirejs.org/docs/api.html#config   
 */
requirejs.config({
    shim : {
        // Declare here non AMD dependencies, for instance:
        // ---------------
        // jquery plugins
        // ---------------
        // 'jqueryExample'          : ['jquery'],
        // 
        // ---------------
        // Handlebars
        // ---------------
        // 'tmpl'                  : ['handlebars'],
        // 'handlebars'    : {
        //     exports: 'Handlebars'
        // }
    },
    // TODO: make all libs dependencies available in bower.doc
    paths : {
        // jquery
        'jquery'            : '../../bower_components/jquery/dist/jquery',
        'application'       : 'app/app'
    }
});