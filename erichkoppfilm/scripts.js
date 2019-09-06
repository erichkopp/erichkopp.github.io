$(document).ready(function() {

	$('#logo').click(function() {
		window.location.href = 'index.html';
	});


	$('.photo').click(function() {

		$('#modal').attr('style', 'display: block');
		$('#modal-img').attr('src', $(this).find('img').attr('src'));


		$('#close').click(function() {
			$('#modal').attr('style', 'display: none');
		});

		$('#modal').click(function() {
			$('#modal').attr('style', 'display: none');
		});

	});

	
	$("#scrolling-wrapper").on( 'scroll', function(){
		let x = $("#first-img").position();
		if (x.left <= -500) {
			$('#more-arrow').fadeOut(500);
		};
	});


	$('#contact').click(function() {
		$('#scrolling-wrapper').removeClass('delay-1s slideInRight');		
		$('#scrolling-wrapper').addClass('slideOutRight faster');
		$('#work').attr('style', 'border: none');
		setTimeout(function() {
			$('#scrolling-wrapper').hide();
			$('#contact-page').attr('style', 'display: block');
			$('#contact').attr('style', 'border-color: #000000');
			$('#contact-page').addClass('animated slideInRight');
		}, 500);
	});

});
