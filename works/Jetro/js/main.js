

 $('.slider__inner').slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1000,
  asNavFor: '.thumbs'
});
$('.thumbs').slick({
  slidesToShow: 6,
  slidesToScroll: 6,
  asNavFor: '.slider__inner',
  focusOnSelect: true,
});


$('.menu__btn').on('click', function () {
  $('.header_menu').slideToggle();
});
