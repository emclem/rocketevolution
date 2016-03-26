$(document).ready(function() {


	// SCROLLED
	$(window).scroll(function() {
		$('.header').toggleClass('header-scrolled', $(this).scrollTop() > 0);
	});


	// RESPONSIVE MENU
	$('#responsivebutton').click(function() {
		$('#responsivemenu').addClass('responsivemenu-clicked');
	});
	$('#responsivemenubutton').click(function() {
		$('#responsivemenu').removeClass('responsivemenu-clicked');
	});


	// BACK TO TOP
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});


	// SLIDER
	$('#sl2').slider();
	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};

});