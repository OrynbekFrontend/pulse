$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite:true,
    speed:300,
    dots: true,
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
});