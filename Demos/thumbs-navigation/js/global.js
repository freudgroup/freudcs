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
(function(context, $) {

	var GalleryNavigation = function(config) {
		var nav = {
			init : function(config) {
				//The List of Items to scroll
				this.$source = config.$source;
				//All items to scroll
				this.$scrollable = config.$scrollable;
				this.$carousel = config.$carousel;
				this.visible = config.visible;
				this.$next = config.$navNext;
				this.$prev = config.$navPrev;

				this.calculateMax();
				return this;
			},
			enableNavigation : function() {
				this.$next.on("click", this.onScrollNextClicked);
				this.$prev.on("click", this.onScrollPrevClicked);
				this.disableArrows();
			},
			calculateMax : function() {
				this.itemWidth = this.$source.first().outerWidth();
				//this.itemWidth += 3;
				this.itemCount = this.$source.length;
				this.maxIndex = this.itemCount - this.visible;
				
				if(this.itemCount >= this.visible) {
					this.enableNavigation();
				}
				this.setScrollableWidth();
				this.setCarouselWidth();
			},
			setScrollableWidth: function(){
				this.$scrollable.css({width: this.itemWidth* this.itemCount + 40});
			},
			setCarouselWidth: function(){
				this.$carousel.css({width: this.itemWidth* this.visible});
			},
			onScrollNextClicked : function(event) {
				event.preventDefault();
				nav.scrollNext();
			},
			onScrollPrevClicked : function(event) {
				event.preventDefault();
				nav.scrollPrev();
			},
			scrollNext : function() {
				var targetIndex = nav.currentIndex + 1;
				if(targetIndex <= nav.maxIndex) {
					nav.$scrollable.not(":animated").animate({
						"left" : -(targetIndex * nav.itemWidth)
					}, nav.scrollDuration, function() {++nav.currentIndex;
						nav.disableArrows();
					});
				}
			},
			scrollPrev : function() {
				var targetIndex = nav.currentIndex - 1;
				if(targetIndex >= 0) {
					nav.$scrollable.not(":animated").animate({
						"left" : -(targetIndex * nav.itemWidth)
					}, nav.scrollDuration, function() {--nav.currentIndex;
						nav.disableArrows();
					});
				}
			},
			scrollToIndex : function(index) {
				if(index <= nav.maxIndex) {
					nav.$scrollable.not(":animated").animate({
						"left" : -(index * nav.itemWidth)
					}, nav.scrollDuration * 3.5, function() {
						nav.currentIndex = index;
						nav.disableArrows();
					});
				} else if(nav.currentIndex < nav.maxIndex) {
					nav.$scrollable.not(":animated").animate({
						"left" : -(nav.maxIndex * nav.itemWidth)
					}, nav.scrollDuration * 3.5, function() {
						nav.currentIndex = nav.maxIndex;
						nav.disableArrows();
					});
				}
			},
			
			disableArrows : function() {
				switch(nav.currentIndex) {
					case 0:
						nav.$prev.fadeOut("fast");
						nav.$next.fadeIn("fast");
						break;
					case nav.maxIndex:
						nav.$next.fadeOut("fast");
						nav.$prev.fadeIn("fast");
						break;
					default:
						nav.$prev.fadeIn("fast");
						nav.$next.fadeIn("fast");
						break;
				}
			},
			currentIndex : 0,
			scrollDuration : 200
			
			}
		nav.init(config);
		return nav;
	}
	/**
	 * Initializes the module.
	 */
	function init() {
		
		/*var object = GalleryNavigation({
          //Items Source
          $source : $(".carousel ul li"),
          //Items Source
          $carousel : $(".carousel"),
          //Items Scroll Container
          $scrollable : $(".carousel ul"),
          //Number of visible Items
          visible : 3,
          //Arrows
          $navNext : $(".next-arrow"),
          $navPrev : $(".prev-arrow")
        });*/
       
       $(".carousel").freudCarousel();
		
	}

	$(init);

})(clientName, jQuery);
