
/*=============================================
Table Of Contents
================================================

 PRELOADER JS
 MENU JS
 TIMER JS
 SECTIONS BACKGROUNDS
 TESTIMONIAL SLIDER JS
 BLOG SLIDER JS
 SPONSORS SLIDER JS
 VENOBOX JS
 WOW ANIMATION JS
 SNOW FALL JS
 

Table Of Contents end
================================================
*/
(function($) {
    'use strict';

    jQuery(document).on('ready', function() {

        /* PRELOADER JS */
		
		$(window).on('load', function() {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(0).fadeOut('slow');
        });
		
	
        /* MENU JS */
		
        $(window).scroll(function() {
            if ($("#mainNav").offset().top > 100) {
                $("#mainNav").addClass("navbar-shrink");
            } else {
                $("#mainNav").removeClass("navbar-shrink");
            }
        });
		
        $('a.js-scroll-trigger').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 48
            }, 1000);
            e.preventDefault();
        });
		
        // Closes responsive menu when a scroll trigger link is clicked
        $('.js-scroll-trigger').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });

        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
            target: '#mainNav',
            offset: 54
        });

		
        /*  TIMER JS */
		
        $('#clock').countdown('2018/01/01', function(event) {
            var $this = $(this).html(event.strftime('' + '<h4>%d :<span>Days</span></h4>' + '<h4>%H :<span>hr</span></h4>' + '<h4>%M :<span>min</span></h4>' + '<h4>%S <span>sec</span></h4>'));
        });
		
		

        $(".crypto-prices").marquee({
            pauseOnHover:!0,
            duplicated:!0,
            duration:18e3,
            gap:0,
            startVisible:!0
        });


        $(".footer-prices").marquee({
            pauseOnHover:!0,
            duplicated:!0,
            duration:18e3,
            gap:0,
            startVisible:!0
        });

		/*  SECTIONS BACKGROUNDS */

        var pageSection = $("section,div");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });


        /*  TESTIMONIAL SLIDER JS */
		
		$('.testimonial-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplay: true,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });



        /*  Blog SLIDER JS */
		
		$('.event-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: true,
            nav: false,
            autoplay: false,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        /* SPONSORS SLIDER JS */
		
		$('.sponsors-slider').owlCarousel({
            loop: true,
            margin: 30,
            dots: false,
            nav: false,
            autoplay: true,
			autoplayTimeout: 3000,
            navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 5
                }
            }
        });



        /* SPONSORS SLIDER JS */
		
		$('.message-slider').owlCarousel({
			loop:true,
			margin: 30,
			nav: false,
			autoplay: true,
			autoplayTimeout: 2300,
			dots: false,
			items:1,
			mouseDrag: true,
			animateIn: "fadeInDown",
			animateOut: "fadeOutDown"
        });


    });
		
		

    /* VENOBOX JS */

    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title',
        titlePosition: 'bottom',
        spinner: 'wave'
    });

    /* WOW ANIMATION JS */

    new WOW().init();

	/*  SNOW FALL JS */
	
	$('.home-static-2').snowfall({
	  round: true,
	  flakeCount : 300,
	  maxSpeed : 5,
	  maxSize : 5
	});
	
})(jQuery);