/*
 * jQuery Rotating Banner 
 *
 *  copyright 2012 Jorge Ortega @jorgeortega
 *  
 */ 

(function($){
    $.fn.extend({
        //plugin name
        rotatingBanner: function(method) {

            //private methods
            
            rotateBanner = function($rotating, duration, interval) {
                var currentImage = 1,
                    nextImage = 2,
                    numImages = $rotating.find('img').length,
                    $firstImage = $rotating.find('.img1').css('opacity', '1');
                    
                $rotating.attr("href", $firstImage.attr("data-link"));
                    
                setInterval(function(){
                    
                    $rotating.find('.img' + currentImage).animate(
                        { 'opacity': '0' }, 
                        interval);
                        
                    $rotating.find('.img' + nextImage).animate(
                        { 'opacity': '1' }, 
                        interval, 
                        function(){
                            
                            var href = $(this).attr('data-link');
                            $(this).parent('a').attr('href', href);
                            
                            if(currentImage < numImages) {
                                currentImage++;
                            } else {
                                currentImage = 1;
                            }
                            if(nextImage < numImages){
                                nextImage++;
                            } else {
                                nextImage = 1;
                            }
                            
                        });
                        
                }, duration);
            }
            
            var methods = {
                    init : function(options) {
                        
                          var defaults = {
                                  duration: '5000',
                                  interval: '1000'
                              };
                          //map defaults and options
                          var options =  $.extend(defaults, options);

                          return this.each(function() {

                              var o = options,
                                  obj = $(this),
                                  $imgs = $("img", obj);
                                  //more cached selectors
                                  //...
                                  $imgs.each(function (index, value){
                                      $(this).addClass("img" + (index + 1));
                                  });
                              
                              rotateBanner($(this), o.duration, o.interval);

                        });//this.each
                    },//init

                    destroy : function( ) {
                      //destroy logic
                      this.remove();
                    }//destroy
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