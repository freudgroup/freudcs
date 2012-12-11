/*!
 * main
 * runs the main application
 */
requirejs.config({
	shim : {
		'jquery.alpha': ['jquery'],
        'jquery.beta': ['jquery']
	},
	paths : {
		"jquery": "libs/jquery"
	}
});

require(["jquery","libs/plugins/jquery.alpha", "libs/plugins/jquery.beta"], function($) {
	$('div[role=main]').alpha().beta();
});