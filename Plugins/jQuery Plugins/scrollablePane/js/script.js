var scrollablePanePlugin = window.scrollablePanePlugin || {};

(function ($, context) {
    
    function init() {
        $("article aside").scrollablePane();
    }
    
    $(init); 

} (jQuery, scrollablePanePlugin));