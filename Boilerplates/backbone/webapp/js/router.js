/**
 * router.js
 * File that defines the routes of the app.
 */

define([
        'jquery',
        'underscore',
        'backbone',
        'landingView',
        'transitionManager',
        'model'
    ],
    function($, _, Backbone, LandingView, TransitionManager, Model) {

        var viewForModel1,
            viewForModel2,
            model1,
            model2,
            currentView,

            /**
             * Routes definition for the different URLs of the app.
             */
            AppRouter = Backbone.Router.extend({
                routes: {
                    'model1': 'showLandingPageforModel1',
                    'model2': 'showLandingPageforModel2',
                    '': 'showLandingPageforModel1'
                }
            }),

            /**
             * Initialize function of the Router.
             */
            initialize = function() {

                var app_router = new AppRouter;
                currentView = null;

                model1 = new Model({
                    title: 'model1',
                    description: 'landing page for model1',
                    id: 'template1'
                });

                model2 = new Model({
                    title: 'model2',
                    description: 'landing page for model2',
                    id: 'template2'
                });

                app_router.on('route:showLandingPageforModel1', function() {
                    viewForModel1 = viewForModel1 || new LandingView({
                        model: model1,
                        orderNumber: 1
                    });
                    TransitionManager.changeView(currentView, viewForModel1);
                    currentView = viewForModel1;
                });


                app_router.on('route:showLandingPageforModel2', function() {
                    viewForModel2 = viewForModel2 || new LandingView({
                        model: model2,
                        orderNumber: 2
                    });
                    TransitionManager.changeView(currentView, viewForModel2);
                    currentView = viewForModel2;
                });

                // Initialization of the Backbone history
                Backbone.history.start();
            };

        return {
            initialize: initialize
        };
    }
);