/*!
 * main
 * runs the main application
 */
requirejs.config({
	shim : {
		'alpha': ['jquery'],
        'beta': ['jquery']
	},
	paths : {
		jquery:	"libs/jquery",
		alpha :	"libs/plugins/jquery.alpha",
		beta :	"libs/plugins/jquery.beta"
	}
});




define(function(require) {
	var $					= require('jquery'),
		alpha				= require('alpha'),
		beta				= require('beta');

	$('div[role=main]').alpha().beta();

});