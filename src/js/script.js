$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite:true,
    speed:300,
    dots: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="./img/left.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./img/right.svg"></button>',
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

  function toggleSlide(item) {
    $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog__card_wrapper_content').eq(i).toggleClass('catalog__card_wrapper_content_active');
            $('.catalog__card_wrapper__ul').eq(i).toggleClass('catalog__card_wrapper__ul_active');
        })
    });
};

toggleSlide('.catalog__link');
toggleSlide('.catalog__card_wrapper__ul_back');

  //modal
  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn();
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #order, #thanks').fadeOut();
  });

  $('.catalog__btn').each(function(i){
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog__title').eq(i).text());
      $('.overlay, #order').fadeIn();
    })
  });

  $('.modal__close').on('click', function(){
    $('.overlay, #order').fadeOut();
  });
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {   // esc
       $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
  });
  $(window).on('click', function(e) {
    if (e.target.classList.contains('overlay')) {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    }
});
  function validateForms(form){
    $(form).validate({
      rules: {
        name: 'required',
        phone: 'required',
        email: {
          required: true,
          email: true
        }
      },
      messages: {
        name: "пожалуйста введите свое имя",
        phone: 'пожалйста введите свой номер телефона',
        email: {
          required: "пожалуйста введите свою почту",
          email: "вы не правильно ввели свою почту"
        }
      }
    });
  };
  validateForms('#consultation__form');
  validateForms('#consultation form');
  validateForms('#order form');

  $('input[name=phone]').mask("+7 (999) 999-99-99");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'mailer/smart.php',
      data: $(this).serialize()
    }).done(function() {
      $(this).find('input').val('');
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
  });

  //scroll up button
  $(window).scroll(function() {
    if($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  //wow js
  new WOW().init();
});