$(document).ready(function() {

	$(window).scroll(function() {
		$('.header').toggleClass('header-scrolled', $(this).scrollTop() > 0);
	});

});