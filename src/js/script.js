$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite:true,
    speed:300,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="src/img/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="src/img/right.svg"></button>',
    responsive:[
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_activ)', function() {
    $(this)
      .addClass('catalog__tab_activ').siblings().removeClass('catalog__tab_activ')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });

  $('.catalog__link').each(function(i) {
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog__card_wrapper_content').eq(i).toggleClass('catalog__card_wrapper_content_active');
      $('.catalog__card_wrapper_list').eq(i).toggleClass('catalog__card_wrapper_list_active');
    })
  })
  $('.catalog__card_wrapper_back').each(function(i) {
    $(this).on('click', function(e){
      e.preventDefault();
      $('.catalog__card_wrapper_content').eq(i).toggleClass('catalog__card_wrapper_content_active');
      $('.catalog__card_wrapper_list').eq(i).toggleClass('catalog__card_wrapper_list_active');
    })
  })
});