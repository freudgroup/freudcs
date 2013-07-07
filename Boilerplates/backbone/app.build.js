/**
 * look for optimization options  for further details
 * https://github.com/jrburke/r.js/blob/master/build/example.build.js
 * node must be installed to run optimizer using the following command.
 * mac
 * $ node r.js -o app.build.js
 * windows powershell :)
 * node r.js -o .\app.build.js
 * 
 */
({
    appDir: "webapp",
    baseUrl: "js/",
    dir: "webapp-build",
    //Comment out the optimize line if you want
    //- "uglify": (default) uses UglifyJS to minify the code.
    //- "uglify2": in version 2.1.2+. Uses UglifyJS2.
    //- "closure": uses Google's Closure Compiler in simple optimization
    //the code minified by UglifyJS v 2.1.2+
    optimize: "uglify2",
    uglify2: {
        comments: true
    },


    //Allow CSS optimizations. Allowed values:
    //- "standard": @import inlining, comment removal and line returns.
    //Removing line returns may have problems in IE, depending on the type
    //of CSS.
    //- "standard.keepLines": like "standard" but keeps line returns.
    //- "none": skip CSS optimizations.
    //- "standard.keepComments": keeps the file comments, but removes line
    //returns.  (r.js 1.0.8+)
    //- "standard.keepComments.keepLines": keeps the file comments and line
    //returns. (r.js 1.0.8+)
    optimizeCss: "standard",

    paths: {
        "jquery"        : "libs/jquery",
        "require"       : "libs/require",
        "backbone"      : "libs/backbone"
        // ADD your Paths as declared in main.js
        // so the optimizer finds each file in it's route.
        // e.g.
        // "alpha" :   "libs/plugins/jquery.alpha"
    },

    modules: [
        //Optimize the application files. 
        {
            name: "main"
        }
    ]
})
