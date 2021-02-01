
$(function (){
   const swiper = new Swiper('.swiper-container', {
    
  slidesPerView: 4,
      spaceBetween: 30,
      
});

  $('.price__item').on('click', function (e) {
    e.preventDefault();
    $('.price__item').removeClass('price__item--active');
    $(this).addClass('price__item--active');
    $('.price__content-item').removeClass('price__content-item--active');
    $($(this).attr('href')).addClass('price__content-item--active');

  });
 
   $("#phone").mask("(999) 999-9999");
});