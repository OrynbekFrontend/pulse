// $(document).ready(function(){
//   $('.carousel__inner').slick({
//     infinite: true,
//     speed: 500,
//     prevArrow: '<button type="button" class="slick-prev"><img src="src/img/left.svg"></button>',
//     nextArrow: '<button type="button" class="slick-next"><img src="src/img/right.svg"></button>',
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 992,
//         settings: {
//           arrows:false,
//           dots: true
//       }
//     }
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         dots: false
//       }
//     },
//     {
//       breakpoint: 992,
//       settings: {
//         arrows:false,
//         dots:true,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     ]
//   });
// });
const slider = tns({
  container: '.carousel__inner',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  nav: false,
  controls: false
});

document.querySelector('.prev').addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector('.next').addEventListener('click', function () {
  slider.goTo('next');
});