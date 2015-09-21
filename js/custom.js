$(document).ready(function() {


	// RESPONSIVE MENU
	$('#responsive-btn').click(function() {
		$('#leftpanel').toggleClass('leftpanel-show');
		$('#responsive-btn-arrow').toggleClass('fa-chevron-down');
		$('#responsive-menu').toggleClass('responsive-menu-show');
	});

	// SLIDESHOW
    $('#slideshow').cbpFWSlider({speed : 1000, easeing : 'ease'});
	    setInterval( function() {
			if($('.cbp-fwnext').is(":visible")) {
	        	$('.cbp-fwnext').click();
	        }
	        else {
	        	$('.cbp-fwdots').find('span').click();
	        }
	}, 4000);


})