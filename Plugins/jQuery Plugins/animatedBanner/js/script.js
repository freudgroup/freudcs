var animatedBannerTest = window.animatedBannerTest || {};

(function ($, context) {
    
    //private method
    function init() {
		
		$(".test1").animatedBanner({
       		  elements: [
           		  {
           		  	className: "title",
	           		steps: [  	
	           			{
		           			initialCSS: {opacity: "0", top: "20px", left: "-300px"},
		           		  	finalCSS: {opacity: "1", top: "20px", left: "100px"},
		           		  	duration: 5000,
		           		  	easing: "easeInQuad",
		           		  	delay: 1000,
		           		  	callback: function(){ }
	           		    },
	           			{
		           			initialCSS: {/*empty*/},
		           		  	finalCSS: {opacity: "0", top: "20px", left: "-300px"},
		           		  	duration: 5000,
		           		  	easing: "easeInQuad",
		           		  	delay: 5000,
		           		  	callback: function(){ }
	           		  	}	           		  	
           		  	]
           		  },
           		  {
           		  	className: "horizontalLine",
           		  	steps: [
	           		  	{
		           		  	initialCSS: {opacity: "0", top: "70px", right: "-900px"},
		           		  	finalCSS: {opacity: "1", top: "70px", right: "0"},
		           		  	duration: 5000,
		           		  	easing: "easeInSine",
		           		  	delay: 1000,
		           		  	callback: function(){ }
	           		  	},
	           		  	{
		           		  	initialCSS: {/*empty*/},
		           		  	finalCSS: {opacity: "0", top: "70px", right: "-900px"},
		           		  	duration: 5000,
		           		  	easing: "easeInSine",
		           		  	callback: function(){ }
	           		  	}	           		  	
           		  	]
           		  }  
       		  	]
		});
				
    }
    
    // The init will run in the document ready
    $(init); 

} (jQuery, animatedBannerTest));
