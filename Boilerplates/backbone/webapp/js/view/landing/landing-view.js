/**
 * landing-view.js
 * File that defines the View for Home section.
 * This file uses the Home template in templates/home/home.html
 */

define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/landing/landing.html'
    ],

    function($, _, Backbone, viewTemplate) {

        /**
         * LandingView definition.
         */
        var LandingView = Backbone.View.extend({

            orderNumber: null,
            /**
             * Method that initialize the LandingView.
             */
            initialize: function(options) {
                if (options.orderNumber) {
                    this.orderNumber = options.orderNumber;
                }

            },
            /**
             * Render method of LandingView.
             */
            render: function(element) {
                if (this.model) {
                    this.compiledTemplate = _.template(viewTemplate, this.model.toJSON());
                    element.html(this.compiledTemplate);
                }
            },
            /**
             * Events associated with the elements in home template.
             */
            events: {

            }
        });

        return LandingView;
    });