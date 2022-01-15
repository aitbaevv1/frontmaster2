$(document).ready(function() {

	$('.visual__block-form__item-bottom__li').click(function() {
		let item = $(this).text();
		console.log(item);
		$('.visual__block-form__item-right__bottom-input').val(item);
	});
	$('.visual__block-form__item__block02-li').click(function() {
		let item = $(this).text();
		console.log(item);
		$('.visual__block-form__item__block02-input').val(item);
	});

	$('.clients__slider').slick({
		dots: true,
	});

	$('.header__burger').click(function() {
		$('.header__burger, .header__center, body').toggleClass('active');
	});
	$('.visual__block-form__item-bottom__right-icon').click(function() {
		$('.visual__block-form__item-bottom__list').slideToggle(300);
	});
	$('.visual__block-form__item__block02-icon').click(function() {
		$('.visual__block-form__item__block02-list').slideToggle(300);
	});

	/*Радио*/
	$('.visual__block-form__radio').click(function() {
		$(this).toggleClass('active');
	});

	$(".material__tabs-nav__item").click(function(event) {
		event.preventDefault();

		$(".material__tabs-nav__item, .material__tabs-content__item").removeClass("active");

		$(this).addClass("active");
		$($(this).attr('href')).addClass("active");

	});
	$(".material__tabs-content__item-subnav__link").click(function(event) {
		event.preventDefault();

		$(".material__tabs-content__item-subnav__link, .material__tabs-content__item-items__block").removeClass("active");

		$(this).addClass("active");
		$($(this).attr('href')).addClass("active");

	});
});