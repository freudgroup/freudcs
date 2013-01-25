/*!
 * main
 * runs the main application
 */
requirejs.config({
	shim : {
		'libs/plugins/jquery.alpha': ['jquery'],
        'libs/plugins/jquery.beta': ['jquery']
	},
	paths : {
		"jquery": "libs/jquery"
	}
});

require(["jquery","libs/plugins/jquery.alpha", "libs/plugins/jquery.beta"], function($) {
	$('div[role=main]').alpha().beta();
});