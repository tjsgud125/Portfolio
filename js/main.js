$(document).ready(function () {
  // 새로고침시 문서 맨 위로 이동
  // $('html,body').animate({
  //   scrollTop:0
  // },200)

  $('#sunhyung').fullpage({
    anchors : ['main', '', '',''],
    navigation: true,
    navigationPosition: 'left',
    slidesNavigation: true,
    keyboardScrolling: true,
    scrollOverflow: true,
    responsiveWidth: 1200,
    normalScrollElements:".popup_1, .popup_2",
    // normalScrollElements:".mySwiper",
    navigationTooltips: ['메인', '프로필', '배너 디자인', '상세페이지', '', '', '', '웹 리디자인', '클론코딩', '앱디자인', '로고디자인',''],
    afterLoad: function (anchorLink, index) {
      console.log('현재 섹션 번호는' + index)
    },
    onLeave: function (index, nextIndex, direction) {
      if (nextIndex == 1) {
        $('#fp-nav').css('opacity', '0');
      } else if (nextIndex == 2) {
        $('#fp-nav').css('opacity', '1');
      } else if (nextIndex == 5 || nextIndex == 6 || nextIndex == 7) {
        $('#fp-nav li:nth-child(4)').find('.fp-tooltip').css('color', '#000')
        $('#fp-nav li:nth-child(4)').find('#fp-nav ul li a span').css('transform', 'rotate(45deg)')
      } else if (nextIndex == 8 || nextIndex == 9 || nextIndex == 10 || nextIndex == 10) {
        $('#fp-nav li:nth-child(4)').find('.fp-tooltip').css('color', '#858585')
      }
    },
    
  })

  $(".mySwiper .swiper-wrapper").mouseenter(function () {
    $('#sunhyung').on('scroll touchmove mousewheel', function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    })
  });
  $(".mySwiper .swiper-wrapper").mouseleave(function () {
    $('#sunhyung').off('scroll touchmove mousewheel');
  });

  $('.gotop').click(function() {
    $.fn.fullpage.moveTo('main'); // 이동하고 싶은 페이지
  });

  // $('.gotop').click(function (e) {
  //   e.preventDefault()
  //   $('html, body').animate({
  //     scrollTop: 0
  //   }, 10000)
  // })

  $('.main .dark').click(function () {
    $('.main .dark .off, section, span, p, .main .main_text p:nth-child(1), h2, .box, .top, .name, .scroll, .scroll .text_loop, button, #fp-nav ul li a, body, a.active, .fp-tooltip, .re-de a, .clone a, button a, .content a').toggleClass('on')
  })


  $('.banner .mySwiper .swiper-wrapper .swiper-slide:nth-child(1) img').click(function () {
    $('.popup').show()
  })
  $('.popup').click(function () {
    $('.popup').hide()
  })
  
  $('.banner .scroll').click(function () {
    $('.popup_bg').show()
    $('.scroll_popup').show()
  })
  $('.scroll_popup').click(function () {
    $('.popup_bg').hide()
    $('.scroll_popup').hide()
  })

  $('.page_1').click(function(){
    $('.popup_1').show()
    $('.first').hide()
    $('.page_1').hide()
    $('.page_1_close').show()
  })
  $('.page_1_close').click(function(){
    $('.popup_1').hide()
    $('.first').show()
    $('.page_1').show()
    $('.page_1_close').hide()
    $('#sunhyung').off('scroll touchmove mousewheel');
  })

  $('.page_2').click(function(){
    $('.popup_2').show()
    $('.second').hide()
    $('.page_2').hide()
    $('.page_2_close').show()
  })
  $('.page_2_close').click(function(){
    $('.popup_2').hide()
    $('.second').show()
    $('.page_2').show()
    $('.page_2_close').hide()
    $('#sunhyung').off('scroll touchmove mousewheel');
  })

})

