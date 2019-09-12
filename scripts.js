$(document).ready(function() {


	// KILL DESKTOP ANIMATIONS FOR MOBILE
	if ($(window).width() <= 750) {
		$('#scrolling-wrapper').removeClass('animated slideInRight delay-1s');
		$('#contact-header').removeClass('animated slideInLeft delay-1s');
	};


	// CLICK TO RELOAD PAGE (DESKTOP)
	$('#logo').click(function() {
		if ($(window).width() > 750){
    		location.reload();
    	};
	});


	// OPEN MODAL IMAGE (DESKTOP)
	$('.photo').click(function() {
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


	// BACK-TO-TOP BUTTON APPEARS AND DISAPPEARS DEPENDING
	// ON SCROLL POSITION (MOBILE)
	$('#scrolling-wrapper').on('scroll', function() {
		if ($(window).width() <= 750) {
			let x = $("#first-img").position();
			if (x.top <= -500) {
				$('#scroll-top-mobile').attr('style', 'display: block');
				$('#scroll-top-mobile').removeClass('fadeOut');
				$('#scroll-top-mobile').addClass('fadeIn');
				$('#scroll-top-mobile').fadeIn(500);
			} else if (x.top < 100) {
				// $('#scroll-top-mobile').addClass('fadeOut');
				$('#scroll-top-mobile').attr('style', 'display: none');
			};
		};
	});


	// BACK-TO-TOP BUTTON (MOBILE)
	$('#scroll-top-mobile').click(function() {
		$("#scrolling-wrapper").animate({ scrollTop: 0 }, "slow");
	});


	// HIDE/ADD RELEVANT ELEMENTS WHEN SWITCHING BETWEEN DESKTOP & MOBILE
	$(window).resize(function() {
		if ($(window).width() > 750) {
			$('#scrolling-wrapper').addClass('animated slideInRight delay-1s');
			$('#scroll-top-mobile').attr('style', 'display: none');
			$('#mobile-menu').attr('style', 'display: none');
			$('#hamburger').attr('style', 'display: none');
			$('#close-mobile').attr('style', 'display: none');
			$('#contact-header').addClass('animated slideInLeft delay-1s');
		} else if ($(window).width() <= 750) {
			$('#scrolling-wrapper').removeClass('animated slideInRight delay-1s');
			$('#contact-header').removeClass('animated slideInLeft delay-1s');
			$('#scroll-top-mobile').attr('style', 'display: none');
			$('#mobile-menu').attr('style', 'display: none');
			$('#hamburger').attr('style', 'display: initial');
			$('#close-mobile').attr('style', 'display: none');			
		};
	});


	// SHOW CONTACT PAGE / HIDE WORK PAGE (DESKTOP)
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


	// SHOW WORK PAGE / HIDE CONTACT PAGE (DESKTOP)
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


	// SHOW WORK PAGE / HIDE CONTACT PAGE (MOBILE)
	$('#work-mobile').click(function() {
		$('#mobile-menu').removeClass('slideInRight')
		$('#mobile-menu').addClass('slideOutRight');
		setTimeout(function() {
			$('#close-mobile').attr('style','display: none');
			$('#hamburger').attr('style','display: block');
			$('#mobile-menu').removeClass('slideOutRight');
			$('#mobile-menu').attr('style', 'display: none');
		},500);
		$('#contact-page').attr('style', 'display: none');
		$('#scrolling-wrapper').attr('style', 'display: block');
	});


	// SHOW CONTACT PAGE / HIDE WORK PAGE (MOBILE)
	$('#contact-mobile').click(function() {
		$('#mobile-menu').removeClass('slideInRight')
		$('#mobile-menu').addClass('slideOutRight');
		setTimeout(function() {
			$('#close-mobile').attr('style','display: none');
			$('#hamburger').attr('style','display: block');
			$('#mobile-menu').removeClass('slideOutRight');
			$('#mobile-menu').attr('style', 'display: none');
		},500);
		$('#scrolling-wrapper').attr('style', 'display: none');
		$('#scroll-top-mobile').attr('style', 'display: none');
		$('#contact-page').attr('style', 'display: block');
	});


	// OPEN/CLOSE SLIDE-OUT HAMBURGER MENU (MOBILE)
	$('#hamburger').click(function() {
		$('#mobile-menu').attr('style', 'display: block');
		$('#mobile-menu').addClass('slideInRight');
		$('#hamburger').attr('style', 'display: none');
		$('#close-mobile').attr('style', 'display: block');
		$('#close-mobile').click(function() {
			$('#mobile-menu').removeClass('slideInRight')
			$('#mobile-menu').addClass('slideOutRight');
			setTimeout(function() {
				$('#close-mobile').attr('style','display: none');
				$('#hamburger').attr('style','display: block');
				$('#mobile-menu').removeClass('slideOutRight');
				$('#mobile-menu').attr('style', 'display: none');
			}, 500);
		});
	});
});
