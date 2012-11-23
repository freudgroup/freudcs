(function($){
    
    $.fn.outerHTML = function(){
     
        // IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
        return (!this.length) ? this : (this[0].outerHTML || (
          function(el){
              var div = document.createElement('div');
              div.appendChild(el.cloneNode(true));
              var contents = div.innerHTML;
              div = null;
              return contents;
        })(this[0]));
     
    }    
    
    $.fn.extend({
        //plugin name
        scrollablePane: function(method) {

            var methods = {
                    init : function(options) {
                          var defaults = {
                                  asideScrollRate: "100",
                                  title: "h4",
                                  scrollSpeed: 400
                              };
                          //map defaults and options
                          var options =  $.extend(defaults, options);

                          return this.each(function(index, element) {

                                var o = options,
                                    obj = $(this),
                                    $element = $(element),                       
                                    $title = $element.find(o.title).outerHTML();
                                    
                                //remove title
                                $element.find(o.title).remove();             
                
                                var $topWrapper =   "<div class='arrowWrapper'><a href='#' class='arrow-up'>up</a></div>" +
                                                        "<div class='wrapper'>" +
                                                            "<div class='container'>",                                                               
                                                                $content = $element.html(),                                                                                      
                                $bottomWrapper =            "</div>" + 
                                                        "</div>" +
                                                    "<div class='arrowWrapper'><a href='#' class='arrow-down'>down</a></div>";                                                        
                            

                                //add title, top and bottom wrappers
                                $element.html($title + $topWrapper + $content + $bottomWrapper);
                                
                                //select handlers
                                var $upArrow = $element.find("a.arrow-up"),
                                    $downArrow = $element.find("a.arrow-down"),
                                    $container = $element.find("div.container");                                
                
                                methods.checkArrows($container, $upArrow, $downArrow);
                
                                //register event handlers
                                $upArrow.click(function(e){
                                    e.preventDefault();
                                    if( parseInt($container.css("top").replace("px", ""), 10) + o.asideScrollRate < 0) {
                                        if($container.queue("fx").length == 0) {
                                            $container.stop(true, true).animate({
                                                top: '+=' + o.asideScrollRate + 'px'
                                            }, o.scrollSpeed, function(){
                                                methods.checkArrows($container, $upArrow, $downArrow);
                                            });
                                        }
                                    }
                                });
                
                                $downArrow.click(function(e){
                                    e.preventDefault();
                                    if( parseInt($container.css("top").replace("px", ""), 10) - o.asideScrollRate < $container.height()) {
                                        if($container.queue("fx").length == 0) {
                                            $container.stop(true, true).animate({
                                                top: '-=' + o.asideScrollRate + 'px'
                                            }, o.scrollSpeed, function(){
                                                methods.checkArrows($container, $upArrow, $downArrow);
                                            });
                                        }
                                    }
                                });                              

                        });//this.each
                    },//init
                    //more functions
                    //..
                    checkArrows : function($container, $upArrow, $downArrow) {
                
                        if( parseInt($container.css("top").replace("px", ""), 10) >= 0) {
                            $upArrow.hide();
                        } else {
                            $upArrow.show();
                        }
                
                        if( parseInt($container.css("top").replace("px", ""), 10) >= (($container.height() - $container.parent().height()) * -1)) {
                            $downArrow.show();
                        } else {
                            $downArrow.hide();
                        }
                    },
                    
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

        }//pluginName
    });//$.fn.extend
})(jQuery);