/**
 * app.js
 * File that initialize the application
 */

define([
        'jquery',
        'underscore',
        'backbone',
        'router'
    ],
    function($, _, Backbone, Router) {
        var initialize = function() {
            // Adding the close functionallty to the View prototype, this will remove the view 
            // from the DOM and it will unbind the events.            
            Backbone.View.prototype.close = function() {
                this.remove();
                this.unbind();
            }

            Router.initialize();
        };

        return {
            initialize: initialize
        };
    }
);