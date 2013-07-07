/**
 * panel.js
 * Backbone model for the Panel View object.
 */

define([
        'jquery',
        'underscore',
        'backbone'
    ],
    function($, _, Backbone) {
        var Panel = Backbone.Model.extend({


            defaults: {
                title: null,
                description: null
            },

            initialize: function() {

            }
        });

        return Panel;
    }
);