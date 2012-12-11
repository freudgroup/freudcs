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
		"jquery": "libs/jquery",
		"plugins": "libs/plugins"
	}
});

require(["jquery","plugins/jquery.alpha", "plugins/jquery.beta"], function($) {
	$('div[role=main]').alpha().beta()
});