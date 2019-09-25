$(document).ready(function () {
	
	// menu btn
	$('.menu-btn').on('click',function () {

		$('body').toggleClass('noscroll');
		$(this).toggleClass('active');
		$('.menu-block').toggleClass('active');
	});

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
		slidesPerRow: 3
	});

})