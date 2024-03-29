$(document).ready(function () {
	
	// menu btn
	$('.menu-btn').on('click',function () {

		$('body').toggleClass('noscroll');
		$(this).toggleClass('active');
		$('.menu-block').toggleClass('active');
		$('.callback').toggleClass('hidden');
	});

	$('.callback').on('click', function (e) {
		e.preventDefault();

		$('body').toggleClass('noscroll');
		$(this).toggleClass('active');
		$('.callback-block').toggleClass('active');
		$('.menu-btn').toggleClass('hidden');
	});

	$('.js-order').on('click',function (e) {
		e.preventDefault();

		$('body').toggleClass('noscroll');
		$(this).toggleClass('active');
		$('.order-block').toggleClass('active');
	})

	$('.js-more').on('click',function (e) {
		e.preventDefault();

		$('body').addClass('noscroll');
		$('.text-popup').addClass('active');
	});

	$('.close').on('click',function (e) {
		e.preventDefault();

		$('body').removeClass('noscroll');
		$('.popup').removeClass('active');
	})

	// Скролл по якорю
	$(".mouse").on("click", function (e) {

        e.preventDefault();

       	var id  = $(this).attr('href'),
        top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);

    });


	// Accordeon
	$('.accordeon__title').on('click',function () {
		$(this).closest('.accordeon').toggleClass('active');
		$(this).closest('.accordeon').find('.accordeon__content').slideToggle();
	})

	// slider
	$('.case-slider').slick({
		appendArrows: '.case-slider-arrows',
		prevArrow: '<span class="prev-arrow"></span>',
		nextArrow: '<span class="next-arrow"></span>',
		variableWidth: true
	});

	$('.clients-slider').slick({
		appendArrows: '.clients-slider-arrows',
		prevArrow: '<span class="prev-arrow"></span>',
		nextArrow: '<span class="next-arrow"></span>',
		vertical: true,
		verticalSwiping: true,
		rows: 2,
		slidesPerRow: 3,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesPerRow: 2
				}
			}
		]
	});

	$('.service-slider').slick({
		fade: true,
		appendArrows: '.service-slider-arrows',
		prevArrow: '<span class="prev-arrow slick-arrow--white"></span>',
		nextArrow: '<span class="next-arrow slick-arrow--white"></span>',
		adaptiveHeight: true
	});

	$('.advantages-slider').slick({
		slidesToShow: 4,
		infinite: false,
		appendArrows: '.advantages-slider-arrows',
		prevArrow: '<span class="prev-arrow slick-arrow--white"></span>',
		nextArrow: '<span class="next-arrow slick-arrow--white"></span>',
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.individual-slider').slick({
		slidesToShow: 2,
		appendArrows: '.individual-slider__arrows',
		prevArrow: '<span class="prev-arrow"></span>',
		nextArrow: '<span class="next-arrow"></span>',
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// input
	$('.input__field').change(function() {
		var $this = $(this);
		var $thisInput = $this.find('input');        
		if ($this.val() !== "") {
			$this.addClass('input--filled');
		} else {
			$this.removeClass('input--filled');      
		}
	});

	// submenu on mobile
	$('.drop-li > a').on('click',function (e) {
		e.preventDefault();

		$('.drop-li').toggleClass('active');
	})

})