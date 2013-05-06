/*!
 * main
 * runs the main application
 */
requirejs.config({
	shim : {
		// ADD ALL non AMD dependencies
		// e.g.
		// "alpha" : ['jquery']
	},
	paths : {
		jquery:	"libs/jquery",
		require: "libs/require"

		// ADD Paths for added libraries
		// e.g.
		// "alpha" :   "libs/plugins/jquery.alpha"
	}
});

define(function(require) {
	var $			= require('jquery');
		// DEPENDENCIES FOR MAIN MODULE
		// e.g.
		// alpha	= require('alpha');
});