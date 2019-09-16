$(document).ready(function(){

	new Swiper('.slider--about-us', {
		slidesPerView: 1,
		spaceBetween: 30,
		effect: 'fade',
		navigation: {
			nextEl: '.slider-aboutUS-next',
			prevEl: '.slider-aboutUS-prev',
		},
	});

	new Swiper('.slider-reviews', {
		spaceBetween: 30,
		effect: 'fade',
		pagination: {
			el: '.swiper-pagination-reviews',
			clickable: true,
		},
	});

	new Swiper('.slider-trainers', {
		spaceBetween: 30,
		effect: 'fade',
		navigation: {
			nextEl: '.slider-trainers-next',
			prevEl: '.slider-trainers-prev',
      },
    });

	

	$('.main-form').select2({
		placeholder: 'Select an option',
		theme: 'custom-select',
	});

	$(".scroll-content").mCustomScrollbar();

	$('.item-packeges .btn').on('mouseover', "", function () {
        $(this).closest('.item-packeges').addClass('hover');
    });

    $(".item-packeges .btn").mouseleave(function() {
        $(this).closest('.item-packeges').removeClass('hover');
    });


	$('body').on('click', '.anchor-link', function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 150;

		$('.hamburger').removeClass('is-active');
		$('.m-panel').removeClass('open');
		$('html, body').removeClass('no-scroll');
		$('.shadow').removeClass('show');
		setTimeout(function () {
			$('body,html').animate({scrollTop: top}, 700);
		}, 300);
	});

	$('.hamburger').on('click', function(e){
		if (!$(this).hasClass('is-active')) {
			$('.hamburger').addClass('is-active');
			$('.m-panel').addClass('open');
			$('html, body').addClass('no-scroll');
			$('.shadow').addClass('show');
		}else {
			$('.hamburger').removeClass('is-active');
			$('.m-panel').removeClass('open');
			$('html, body').removeClass('no-scroll');
			$('.shadow').removeClass('show');
		}
	});

	$('.shadow').on('click', function (e) {
		if (!$(e.target).closest(".m-panel").length) {
			if (!$(e.target).closest(".m-panel").length) {
				$('.hamburger').removeClass('is-active');
				$('.m-panel').removeClass('open');
				$('.shadow').removeClass('show');
				$('html, body').removeClass('no-scroll');
			}
		}
		e.stopPropagation();
	});

});