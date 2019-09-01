$(window).bind("scroll", function() {
	if ($(window).scrollTop() > 50) {
		$("#navbar-fixed").addClass("sticky");
	} else {
		$("#navbar-fixed").removeClass("sticky");
	}
});
