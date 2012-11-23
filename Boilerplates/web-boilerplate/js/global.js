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
	
	var vars = {
			a : 0,
			b : 1
		};
	
	var utils = {
		
		/**
		 * Description
		 */
		method1 : function() {
			
		}
	};
	
	/**
	 * Description
	 * 
	 * @return a lovely message.
	 */
	context.publicMethod = function () {
		return "I'm scared";
	}
	
	/**
	 * Initializes the module.
	 */
	function init() {
		
	}
	
	$(init);

})(clientName, jQuery);
