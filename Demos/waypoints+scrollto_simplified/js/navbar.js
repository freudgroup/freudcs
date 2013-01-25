$(function() {
	var nav_container = $(".nav-container"),
		nav = $("nav"),
		top_spacing = 15,
		waypoint_offset = 50,
		sections = $("section"),
		navigation_links = $("nav a");

	nav_container.waypoint({
		handler: function(direction) {
			if (direction == 'down') {
				nav_container.css({ 'height':nav.outerHeight() });		
				nav.stop().addClass("sticky").css("top",-nav.outerHeight()).animate({"top":top_spacing});
			} else {
				nav_container.css({ 'height':'auto' });
				nav.stop().removeClass("sticky").css("top",nav.outerHeight()+waypoint_offset).animate({"top":""});
			}
		},
		offset: function() {
			return -nav.outerHeight()-waypoint_offset;
		}
	});
	
	sections.waypoint({
		handler: function(direction) {
			var active_section;
			active_section = $(this);

			if (direction === "up") 
			{
				active_section = active_section.prev();
			}

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("selected");
			active_link.addClass("selected");

		},
		offset: '125px'
	})
	
	navigation_links.click( function(event) {
		$.scrollTo(
			$(this).attr("href"),
			{
				duration: 200,
				offset: { 'left':0, 'top':-100 },
			}
		);
	});
});