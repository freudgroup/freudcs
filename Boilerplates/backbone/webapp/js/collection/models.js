/**
 * panel.js
 * Backbone Collection for the Panel View object.
 */

define([
        'jquery',
        'underscore',
        'backbone',
        'model'
        ], 
    function($, _, Backbone,Model) {
        var Models = Backbone.Collection.extend({
            model : Model,

            defaults: {
               
            },
        
            initialize: function() {
              
            }
    
        });
        
        return Models;
    }
);