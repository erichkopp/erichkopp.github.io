$(document).ready(function() {

	$('#logo').click(function() {
		if ($(window).width() > 750){
    		location.reload();
    	};
	});


	$('.photo').click(function() {
		if ($(window).width() > 750){
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

	
	$("#scrolling-wrapper").on( 'scroll', function(){
		let x = $("#first-img").position();
		if (x.left <= -500) {
			$('#more-arrow').fadeOut(500);
		};
	});


	$('#contact').click(function() {
		$('#scrolling-wrapper').removeClass('delay-1s slideInRight');		
		$('#scrolling-wrapper').addClass('slideOutRight faster');
		setTimeout(function() {
			$('#scrolling-wrapper').hide();
			$('#contact-page').attr('style', 'display: block');
			$('#contact-page').addClass('animated slideInRight');
			setTimeout(function() {
				$('#contact-header').attr('style', 'color: #000000');
				$('#contact-header').text('HIT ME UP!');
			}, 800);
		}, 800);
	});


	$('#work').click(function() {
		$('#contact-page').removeClass('slideInRight');
		$('#contact-page').addClass('slideOutRight faster');
		setTimeout(function() {
			$('#contact-page').hide();
			$('#scrolling-wrapper').removeClass('slideOutRight faster');
			$('#scrolling-wrapper').attr('style', 'display: block');
			$('#scrolling-wrapper').addClass('slideInRight');
			$('#contact-page').removeClass('slideOutRight');
			$('#contact-header').attr('style', 'color: transparent');
		}, 500);
	});


	$('#submit-button').click(function() {
		setTimeout(function() {
			$('#submit-button').animate({ 'letter-spacing': '50px' }, 50);
		}, 200);

		// Delay form submission for animation to complete
		$('form').submit(function (e) {
		    var form = this;
		    e.preventDefault();
		    setTimeout(function () {
		        form.submit();
		    }, 1000);
		});
	});


	$('#hamburger').click(function() {
		$('#mobile-menu').attr('style', 'display: block');
		$('#mobile-menu').addClass('slideInRight');
		$('#hamburger').attr('style', 'display: none');
		// $('#close-mobile').attr('style', 'z-index: 5');
		$('#close-mobile').attr('style', 'display: block');
		$('#close-mobile').click(function() {
			$('#mobile-menu').removeClass('slideInRight')
			$('#mobile-menu').addClass('slideOutRight');
			setTimeout(function() {
				$('#close-mobile').attr('style','display: none');
				$('#hamburger').attr('style','display: block');
				$('#mobile-menu').removeClass('slideOutRight');
				$('#mobile-menu').attr('style', 'display: none');
			},1000);

		});
	});

});
