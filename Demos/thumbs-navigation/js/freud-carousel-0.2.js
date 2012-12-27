(function($){
    
    $.fn.extend({
        
        freudCarousel: function(method) {
            
            var defaults = {
                    // Styling
                    previousClass: "arrow prev-arrow ir",
                    nextClass: "arrow next-arrow ir",
                    carouselPadding : 40,
                    
                    // Animations
                    scrollDuration : 400,
                    
                    // Content
                    previousText: "Previous",
                    nextText: "Next",
                    
                    // Logic
                    previousClickSelector: ".prev-arrow",
                    nextClickSelector: ".next-arrow",
                    slidePerClick : 1,
                    cycle : false
                };
            /*
             * displayControls
             */
            var displayControls = function ($carousel, o) {
                
                 var $parent = $carousel.parent().parent(),
                    $prev = $parent.find(o.previousClickSelector),
                    $next = $parent.find(o.nextClickSelector),
                    index = $carousel.data("index");
                
                if (!o.cycle && index === 0) {
                    $prev.fadeOut("fast");
                    $next.fadeIn("fast");
                    
                } else if (!o.cycle && index >= $carousel.data("viewMaxWidth")) {
                    $prev.fadeIn("fast");
                    $next.fadeOut("fast");
                    
                } else {
                    $prev.fadeIn("fast");
                    $next.fadeIn("fast");
                }
            }
            
            /*
             * previous
             */
            var previous = function ($carousel, o) {
                var targetIndex = $carousel.data("index") - o.slidePerClick;
                
                if (o.cycle || targetIndex >= 0) {
                    
                    /*if (o.cycle && targetIndex < 0) {
                        offset = 0 - targetIndex;
                        console.log(offset);
                        $carousel.css({ marginLeft : "-=" + (offset * o.itemsWidth) })
                            .prepend($carousel.find("li:gt(" + (o.itemsCount - offset - 1) + ")"));
                    }*/
                    
                    $carousel.not(":animated").animate({
                        "left" : -(targetIndex * o.itemsWidth)
                        
                    }, o.scrollDuration, function() {
                        // Updaet index & hide/show navigation buttons
                        $carousel.data("index", targetIndex);
                        displayControls($carousel, o);
                    });
                }
            }
            
            /*
             * next
             */
            var next = function ($carousel, o) {
                var targetIndex = $carousel.data("index") + o.slidePerClick,
                    viewMax = $carousel.data("viewMaxWidth"),
                    offset = 0;
                
                if (o.cycle || ($carousel.data("index") + 1) <= viewMax) {
                    
                    /* if (o.cycle && targetIndex > viewMax) {
                        offset = targetIndex - viewMax + 1;
                        
                        $carousel.css({ left : "+=" + (offset * o.itemsWidth),
                                        marginLeft : "+=" + (offset * o.itemsWidth) })
                                    .append($carousel.find("li:lt(" + offset + ")"));
                    }*/
                    
                    $carousel.not(":animated").animate({
                        "left" : -(targetIndex * o.itemsWidth)
                        
                    }, o.scrollDuration, function () {
                        // Updaet index & hide/show navigation buttons
                        $carousel.data("index", targetIndex);
                        $carousel.data("viewMaxWidth", viewMax + offset)
                        displayControls($carousel, o);
                    });
                }
            }
            
            /*
             * 
             */
            var goTo = function (targetIndex, $carousel, o) {
                targetIndex = targetIndex >= o.itemsCount ? o.itemsCount - 1 : targetIndex;
                
                $carousel.not(":animated").animate({
                    "left" : -(targetIndex * o.itemsWidth)
                    
                }, o.scrollDuration, function () {
                    // Updaet index & hide/show navigation buttons
                    $carousel.data("index", targetIndex);
                    displayControls($carousel, o);
                });
            }
            
            
            var methods = {
                    init : function(options) {
                          
                          //map defaults and options
                          var options =  $.extend(defaults, options);
                            
                          return this.each(function(index, element) {
                          
                            var o = options,
                                obj = $(this),
                                $container = $(element),
                                $carousel = $container.find("ul"),
                                $slides = $container.find("li");
                            
                            var $parent = $container.css({ marginLeft : o.carouselPadding, marginRight : o.carouselPadding })
                                            .wrap('<div class="carousel-wrapper">')
                                            .parent().append('<a href="#" class="' + o.previousClass + '">' + o.previousText + '<span></span></a><a href="#" class="' + o.nextClass + '">' + o.nextText + '<span></span></a>');
                            
                            // static values
                            o.itemsCount = $slides.length;
                            o.itemsWidth = $slides.first().width();
                            o.carouselWidth = o.itemsCount * o.itemsWidth;
                            
                            // dynamic values
                            $carousel.data("viewMaxWidth", o.itemsCount - parseInt($container.width() / o.itemsWidth, 10));
                            $carousel.data("index", 0);
                            
                            // Sets the width of the <ul> parent of the elements, so no matter how big it is,
                            //      it will mantain the one line display.
                            $carousel.css({ width : o.carouselWidth });
                            
                            // Hide/show navigation buttons
                            displayControls($carousel, o);
                            
                            // Event Handlers
                            $parent.on("click", o.previousClickSelector, function (e) {
                                e.preventDefault();
                                previous($carousel, o);
                            });
                            
                            $parent.on("click", o.nextClickSelector, function (e) {
                                e.preventDefault();
                                next($carousel, o);
                            });
                            
                            var resizeTimeoutId = 0,
                                resizeTimeout = 500;
                            
                            $(window).resize(function () {
                                clearTimeout(resizeTimeoutId);
                                resizeTimeoutId = setTimeout(function () {
                                    $carousel.data("viewMaxWidth", o.itemsCount - parseInt($container.width() / o.itemsWidth, 10));
                                    displayControls($carousel, o);
                                    
                                    /*if ($carousel.data("index") > $carousel.data("viewMaxWidth")) {
                                        
                                        console.log("maxWidth " + $carousel.data("viewMaxWidth") + " o.itemsCount " + o.itemsCount + " index " + $carousel.data("index"));
                                        var maxWidth = $carousel.data("viewMaxWidth");
                                        maxWidth = maxWidth > o.itemsCount ? o.itemsCount : maxWidth;
                                        var targetIndex = $carousel.data("index") - maxWidth;
                                        
                                        goTo(targetIndex, $carousel, o);
                                    }*/
                                    
                                }, resizeTimeout);
                            });
                        });//this.each
                    },//init
                    
                    destroy : function( ) {
                        //destroy logic
                    }//destroy
                };//methods
            
            if ( methods[method] ) {
                return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof method === 'object' || ! method ) {
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Method ' +  method + ' does not exist on this plugin' );
            }
        
        }//freudCarousel
    });//$.fn.extend
})(jQuery);