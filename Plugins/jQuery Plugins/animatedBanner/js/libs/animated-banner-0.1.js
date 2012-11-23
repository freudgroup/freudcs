/*
 * jQuery Animated Banner
 * copyright 2012 Jorge Ortega @jorgeortega
 * 
 * 
 * */

(function($){
    $.fn.extend({
        animatedBanner: function(method) {
			
         /** EXAMPLE ELEMENTS OBJECT
          	
           		  elements: [
           		  {
           		  	className: "animate",
               		  	steps: [ 
	               		  	{ 
	               		  		initialCSS: {opacity: "0", left: "0"},
	               		  		finalCSS: {opacity: "1", left: "+=50px"},
	               		  		duration: 1000,
	               		  		easing: "easeInQuad",
	               		  		delay: 1000,
	               		  		callback: function() {}
	               		  	}
               		  	]
           		  }
           		  ]
           		  
         **/

            var methods = {
            		/**
            		 * Init plugin
            		 * 
            		 * */
                    init : function(options) {

                          return this.each(function() {

								var o = options,
							    	$obj = $(this);
							    	
							    $obj.data("elements", {
							    	elements: options
							    });
							    
							    //main logic, set animations from data o options (json arguments)
								methods.setAnimations(o, $obj);
                              
                        });//this.each
                    },//init
                    /**
                     * Reset plugin
                     * 
                     * **/
                    reset : function() {

						return this.each(function() {

								var $obj = $(this);
							    	
							    if($obj.data("elements")) {
									var o = $obj.data("elements").elements;
							    	//main logic, set animations from data o options (json arguments)
									methods.setAnimations(o, $obj);
								}
                              
                        });//this.each

                    },
                    /**
                     * main logic
                     * params: o = options (json arguments)
                     *         $obj = this jquery DOM object
                     * 
                     * */
                    setAnimations : function(o, $obj) {
                    			
                    			var $elementsToAnimate = {}
                    			
							    if(o && o.elements != undefined) {
									for(var i = 0; i < o.elements.length; i++) {
										
										//get class of element to animate
									  	$elementsToAnimate[i] = $obj.find("." + o.elements[i].className);
									  	
									  	if(o.elements[i].steps != undefined) {
										  	for(var j = 0; j < o.elements[i].steps.length; j++) {
										  		var step = o.elements[i].steps[j];
										  		//set initial CSS of this element in this step in loop
										    	$elementsToAnimate[i].css(step.initialCSS);
										    	//set animation with final CSS of this element in this step in loop
										    	$elementsToAnimate[i].animate(
										    				step.finalCSS,
										    				step.duration,
										    				step.easing,
										    				step.callback
										    			).delay(step.delay);
										   }//for
									   }//if
									}//for
								}//if                    	
                    },//setAnimations
                    /**
                     * Stop all animations
                     * 
                     * */
                    stop : function() {
				       return this.each(function() {
				       	
							var $obj = $(this);
							
								if($obj.data("elements")) {
							    	var o = $obj.data("elements").elements,
	                    				$elementsToAnimate = {}
	                    			
								    if(o && o.elements != undefined) {
										for(var i = 0; i < o.elements.length; i++) {
											//get class of element to animate
										  	$elementsToAnimate[i] = $obj.find("." + o.elements[i].className);
										  	$elementsToAnimate[i].clearQueue();
										  	$elementsToAnimate[i].stop();
										}//for
									}//if
								}
				       });
                    },//stop
                    /**
                     * Destroy
                     * */
                    destroy : function() {
                    	return this.each(function() {
                    		var $this = $(this);
				       			$this.removeData("elements");
				       	});
                    }
               };//methods

            if ( methods[method] ) {
                return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Method ' +  method + ' does not exist on this plugin' );
            }

        }//pluginName
    });//$.fn.extend
})(jQuery);