
$(function (){
   var swiper = new Swiper('.swiper-container', {
     slidesPerView: 1,
      spaceBetween: 10,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }
    });
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >550) {
      $(".menu").addClass("fixed");
      $(".menu__item-b--call").addClass("active");
    } else{
      $(".menu").removeClass("fixed");
      $(".menu__item-b--call").removeClass("active");

    }
  });
  $('.price__item').on('click', function (e) {
    e.preventDefault();
    $('.price__item').removeClass('price__item--active');
    $(this).addClass('price__item--active');
    $('.price__content-item').removeClass('price__content-item--active');
    $($(this).attr('href')).addClass('price__content-item--active');

  });
   $("#phone").mask("(999) 999-9999");
   $('.menu__btn').on('click',function () {
     $('.menu__list').toggleClass('menu__list--active');
   });
});