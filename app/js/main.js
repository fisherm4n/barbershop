
$(function (){
   var swiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
      // init: false,
     navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        500: {
          slidesPerView: 2,
           
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
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
   $(".menu__link, .more__signup").on("click",function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
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