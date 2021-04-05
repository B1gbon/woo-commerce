const burger = document.querySelector('.burger'),
		  close = document.querySelector('.menu__close'),
      menu = document.querySelector('.header__menu')

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});


var mySwiper = new Swiper ('.slider-block', {
  slidesPerView: 1,
  effect: 'fade',
  navigation: {
    nextEl: '.slider-nav_next',
    prevEl: '.slider-nav_prev',
  },
});



$(document).ready(function () {
  var modal = $('.modal:first-of-type'),
      modalAnswer = $('.modal-answer'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close'),
      closeBtnAnswer = $('.modal-answer__close');
      
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    $('.modal').removeClass('modal--visible');
  });
  closeBtnAnswer.on('click', function () {
    modalAnswer.toggleClass('modal-answer--visible');
  });
  $(document).keydown(function(e) {
    if (e.keyCode === 27) {
      e.stopPropagation();
      $('.modal').removeClass('modal--visible');
    }
  });
  modal.click(function(e) {
		if ($(e.target).closest('.modal__dialog').length == 0) {
			modal.toggleClass('modal--visible');					
		}
  });	
  $('.modal-answer').on('click', function (e) {
    if (modalAnswer.is(e.target)) {
      modalAnswer.toggleClass('modal--visible');
    }
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        if ($('.upbutton').is(':hidden')) {
            $('.upbutton').css({opacity : 1}).fadeIn('slow');
        }
    } else { $('.upbutton').stop(true, false).fadeOut('fast'); }
});

$('.upbutton').click(function() {
    $('html, body').stop().animate({scrollTop : 0}, 300);
});


// $("body").on('click', '[href*="#"]', function(e){
//     var fixed_offset = 100;
//     $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
//     e.preventDefault();
// });


jQuery('.item-1').click(function () {
   jQuery('html, body').animate({
     scrollTop: jQuery(".features").offset().top
   }, 400);
});
jQuery('.item-2').click(function () {
  jQuery('html, body').animate({
    scrollTop: jQuery(".document").offset().top - 42
  }, 400);
});
jQuery('.item-3').click(function () {
  jQuery('html, body').animate({
    scrollTop: jQuery(".feed__title").offset().top
  }, 400);
});
jQuery('.item-4').click(function () {
  jQuery('html, body').animate({
    scrollTop: jQuery(".support").offset().top
  }, 400);
});
jQuery('.item-5').click(function () {
  jQuery('html, body').animate({
    scrollTop: jQuery(".footer__description").offset().top
  }, 400);
});


function validateForm(form){
  $(form).validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 17
      },
      userQuestion: "required",
      
      userEmail: {
        required: true,
        email: true
      },
      policyCheckbox: "required"
        
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Слишком короткое имя",
        maxlength: "Имя не должно превышать 15 символов"
      },
      userPhone: {
        required: "Заполните поле",
        minlength: "Некорректно введен номер"
      },
      userQuestion: {
        required: "Заполните поле"
      },
      userEmail: {
        required: "Заполните поле",
        email: "Введите Ваш email в формате name@domain.com"
      },
      policyCheckbox: {
        required: "Поставьте галочку"
      }
    },
    errorPlacement: function (error, element) {
      if (element.attr("type") == "checkbox") {
          return element.next('label').parent().append(error);
      }
       error.insertAfter($(element));
     },


    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function(){
         $(form)[0].reset();
          $(form).find('input').val("");
          modal.removeClass('modal--visible');
          modalAnswer.addClass('modal--visible');
          // modal.toggle('modal--visible');
          $('.modal-answer__title').text('Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут.');
          // $(form).text('Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут.');
          // $(form).html('<p class="modal-answer__text">Спасибо! Заявка успешно отправлена. Наш менеджер перезвонит Вам в течение 15 минут. <br><br>Чтобы узнавать новости первыми, подпишитесь на нашу группу в ВК <br><a class="modal-answer__link" href="https://vk.com/glo_academy" target="_blank"><img src="./img/vk-com.png" alt="vk"></a></p>');
        },
        error: function(jqXHR, textStatus) {
          console.error(jqXHR + " " + textStatus);
        }
      });
    }
  });
}
validateForm('.modal__form');
validateForm('.control__form');
validateForm('.footer__form');

  // маска для телефона
$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "Ваш номер телефона"});
});
