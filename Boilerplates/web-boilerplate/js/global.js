/*
 * <Client Name>
 * 
 * <Project Name>
 *
 * Global Namespace
 */
var clientName = window.clientName || {};

/*
 * Global logic
 * @namespace
 */
(function (context, $) {

    'use strict';

    var vars = {
            a : 0,
            b : 1
        };

    var utils = {

        /**
         * Description of my private method for utils.
         *
         * @param param1 {Object} Sample 1
         * @param param2 {Object} Sample 2 of another object
         *
         * @private
         */
        method1 : function (param1, param2) {
            param2 = param1;
            param1 = param2;
        }
    };

    /**
     * Description of a public method to be used outside of the module.
     * 
     * @return {String} a lovely message.
     * @public
     */
    context.publicMethod = function () {
        return "I'm scared";
    };

    /**
     * Initializes the module.
     * @private
     */
    function init() {
        alert("Initializing module...");
    }

    $(init);

}(clientName, jQuery));
