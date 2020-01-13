$(document).ready(function() {

	// REDIRECT TO HOME
	$('#icon').click(function() {
		window.location.href = "index.html";
	});


	// LEFT AND RIGHT SCROLL BUTTONS (DESKTOP)
	$('#right-arrow').click(function() {
		$('#scrolling-wrapper').animate({
			scrollLeft: '+=600px'
		}, 'slow')
	});
	$('#left-arrow').click(function() {
		$('#scrolling-wrapper').animate({
			scrollLeft: '-=600px'
		}, 'slow')
	});


	// OPEN MODAL IMAGE (DESKTOP)
	$('.image').click(function() {
		if ($(window).width() > 750) {
			$('#modal').attr('style', 'display: block');
			$('#modal-img').attr('src', $(this).find('img').attr('src'));
			$('#close').click(function() {
				$('#modal').attr('style', 'display: none');
			});
			$('#modal').click(function() {
				$('#modal').attr('style', 'display: none');
			});
		};
	});


	// SCROLL TO TOP (MOBILE)
	$('#mobile-logo').click(function() {
  		$('#scrolling-wrapper').animate({ scrollTop: 0 }, 'slow');
  		return false;
	})


	// OPEN MOBILE MENU
	$('#hamburger').click(function() {
		$('#mobile-menu').attr('style', 'display: block');
		$('#hamburger').attr('style', 'display: none');
		$('#exit-menu').attr('style', 'display: block');
		$('#mobile-menu').attr('class', 'animated slideInDown');
	});


	// CLOSE MOBILE MENU
	$('#exit-menu').click(function() {
		$('#hamburger').attr('style', 'display: block');
		$('#exit-menu').attr('style', 'display: none');
		$('#mobile-menu').attr('class', 'animated slideOutUp');
	});

});