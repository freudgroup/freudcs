/**
 * transition-manager.js
 * Manages the transitions between the views 
 */

define([
    'jquery'
    ],

    function($) {

    var TransitionManager = {
       
        viewsWrapperId : "#backbone-wrapper",
        prevContainerId : "#prevContainer",
        nextContainerId : "#nextContainer", 
        containerId : "#container",
        transitionTimeBetweenViews : 1500,
        prevContainerBasicContent : "<div id='prevContainer'></div>",
        nextContainerBasicContent : "<div id='nextContainer'></div>",

        changeView : function( currentView , newView) {
            if (currentView){
                var currentContainer = $(this.containerId); 
                thisHelper = this;
                if (newView.orderNumber < currentView.orderNumber ){
                    
                    var prevContainer = $(this.prevContainerId);
                    newView.render(prevContainer);
                    prevContainer.css("display","block");
                    prevContainer.animate({
                        "margin-top": '0%',
                        easing: 'easeInOutCubic'
                    },
                    this.transitionTimeBetweenViews,function(){
                        currentContainer.unbind();
                        currentContainer.remove(); 
                        currentView.remove();
                        prevContainer.attr("id","container");
                        $(thisHelper.viewsWrapperId).prepend(thisHelper.prevContainerBasicContent);
                        newView.setElement($(thisHelper.containerId));
                    });
                }
                else if (newView.orderNumber > currentView.orderNumber ){
                    
                    var nextContainer = $(this.nextContainerId);
                    newView.render(nextContainer);
                    nextContainer.css("display","block");
                    currentContainer.animate({
                        "margin-top": '-100%',
                        easing: 'easeInOutCubic'
                    },
                    this.transitionTimeBetweenViews,function(){
                        currentContainer.unbind();
                        currentContainer.remove(); 
                        currentView.remove();
                        nextContainer.attr("id","container");
                        $(thisHelper.viewsWrapperId).append(thisHelper.nextContainerBasicContent);
                        newView.setElement($(thisHelper.containerId));
                    });
                }
                
            }
            else{
                newView.render($(this.containerId));
                newView.setElement($(this.containerId));
            }
        }
    };
    return TransitionManager;
});