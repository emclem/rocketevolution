$(document).ready(function() {

	$(window).scroll(function() {
		$('.header').toggleClass('header-scrolled', $(this).scrollTop() > 0);
	});


	$('#sl2').slider();
	var RGBChange = function() {
	  $('#RGB').css('background', 'rgb('+r.getValue()+','+g.getValue()+','+b.getValue()+')')
	};

});