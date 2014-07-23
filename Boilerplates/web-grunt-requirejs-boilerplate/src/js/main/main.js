/*
 * CLIENT NAME
 *
 * PROJECT NAME
 *
 * Global Namespace
 */

 // Please read: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html, in order to create
 // more files for a larger project.

 var projectName = window.projectName || {};

 /* 
  * Main Logic
  * @Namespace
  */
(function (context, $) {

    'use strict';

    var vars = {

    };

    var object = (function () {
        
        /*
         *
         */
        function init () {
        }

        return { init : init };
    })();

    /*
     *
     */
    function init () {
      if ("hola" == "hola") {
        console.log("hola");
      }
    }

    $(init);

}(projectName, jQuery));