$("#mobile-menu").click(function() {
	$("body").toggleClass("active");
	$("#navbar__toggle").toggleClass("active");
	$("#mobile-menu").toggleClass("active");
});

$("#slick-slide").slick({
	autoplay: true,
	autoplaySpeed: 5000,
	speed: 700,
	dots: true,
	arrows: false,
	draggable: false
});