/*!
 * Start Bootstrap - Creative v6.0.3 (https://startbootstrap.com/themes/creative)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 72)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
        
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-scrolled");
        } else {
            $("#mainNav").removeClass("navbar-scrolled");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Magnific popup calls
    $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });


})(jQuery); // End of use strict
//禁用F5
// $(document).ready(function(){ $(document).bind("keydown",function(e){var e=window.event||e;if(e.keyCode==116){ e.keyCode = 0; return false;} }) })

  $(function() {

      function isMobile() {

          try{ document.createEvent("TouchEvent"); return true; }

          catch(e){ return false;}

        }
      if(isMobile()){
        $('.nav-link').css("padding","0.5rem 1rem")
        $('.nav-link').css("display","block")
        $('.dropdown-toggle').removeClass('dropdown-toggle')
        $("#logo").width('250PX');        
        $(window).scroll(function() {
            var scroHei = $(window).scrollTop();//滾動的高度
            // alert(scroHei)
            if (scroHei >= 1) {
                $('.J_goTop').hide();
            }if (scroHei >= 90) {
                $('.J_goTop').show();
                $('#two').fadeIn();
                $('#two').addClass('animate__animated animate__backInRight');
            }if(scroHei >= 680){
                $('#three').fadeIn();
                $('#three').addClass('animate__animated animate__backInDown');
            }if(scroHei >= 1800){
                $('#four').fadeIn();
                $('#four').addClass('animate__animated animate__backInUp');
            }if(scroHei >= 3620){
                $('#five').fadeIn();
                $('#five').addClass('animate__animated animate__backInDown');
            }if(scroHei >= 4100){
                $('#six').fadeIn();
                $('#six').addClass('animate__animated animate__backInLeft');
            }
            else if(scroHei < 680){
                $('#three').fadeOut();
            }else if(scroHei < 1800){
                $('#four').fadeOut();
            }else if(scroHei < 3620){
                $('#five').fadeOut();
            }else if(scroHei < 4100){
                $('#six').fadeOut();
            }
        }) 
      }

      else{      //scroll 事件適用於所有可滾動的元素和 window 對象（瀏覽器窗口）。
        $(window).scroll(function() {
            var scroHei = $(window).scrollTop();//滾動的高度
            if (scroHei >= 1) {
                $('.J_goTop').hide();
            }if (scroHei >= 90) {
                $('.J_goTop').show();
                $('#two').fadeIn();
                $('#two').addClass('animate__animated animate__backInRight');
            }if(scroHei >= 600){
                $('#three').fadeIn();
                $('#three').addClass('animate__animated animate__backInDown');
            }if(scroHei >= 1100){
                $('#four').fadeIn();
                $('#four').addClass('animate__animated animate__backInUp');
            }if(scroHei >= 1700){
                $('#five').fadeIn();
                $('#five').addClass('animate__animated animate__backInDown');
            }if(scroHei >= 2000){
                $('#six').fadeIn();
                $('#six').addClass('animate__animated animate__backInLeft');
            }else if(scroHei < 90){
                $('#two').fadeOut();
                $('#three').fadeOut();
                $('#four').fadeOut();
                $('#five').fadeOut();
                $('#six').fadeOut();
            }else if(scroHei < 600){
                $('#three').fadeOut();
            }else if(scroHei < 1100){
                $('#four').fadeOut();
            }else if(scroHei < 1700){
                $('#five').fadeOut();
            }else if(scroHei < 2000){
                $('#six').fadeOut();
            }
        })
      }

          /*點擊返回頂部*/
      $('.J_goTop').click(function() {
          $('body,html').animate({
              scrollTop: 0
          }, 600);
      })
// window.onbeforeunload = function (evt) { 
//     var message = 'Are you sure you want to leave?'; 
//     if (typeof evt == 'undefined') { 
//     evt = window.event; 
//     } 
//     if (evt) { 
//     evt.returnValue = message; 
//     } 
//     return message; 
// } 
      $('#Introduction').click(function() {
                $('body,html').animate({scrollTop: 0 }, 600);
                $('#movie').removeClass(' animate__backInLeft');
                $('#movie').addClass(' animate__backOutLeft');
                // $('#produce_animate').removeClass(' animate__backInLeft');
                // $('#produce_animate').addClass(' animate__backOutLeft');
                $('#history').addClass(' animate__backInLeft');
                $('#produce_title').fadeOut();
                $('#movie_title').fadeOut();
                $('#tow_title').fadeOut();
                $('#three_title').fadeOut();
                $('#four').fadeOut();
                $('#five_title').fadeOut();
                $('#six').fadeOut();
                $('#four').attr('id','four_null');
                $('#six').attr('id','six_null');
                $('#history_tutle').fadeIn();
      })
      $('#produce').click(function() {
                $('body,html').animate({scrollTop: 0 }, 600);
                $('#movie').removeClass(' animate__backInLeft');
                $('#movie').addClass(' animate__backOutLeft');
                // $('#history').removeClass(' animate__backInLeft');
                // $('#history').addClass(' animate__backOutLeft');
                $('#produce_animate').addClass(' animate__backInLeft');
                $('#history_tutle').fadeOut();
                $('#movie_title').fadeOut();
                $('#tow_title').fadeOut();
                $('#three_title').fadeOut();
                $('#four').fadeOut();
                $('#five_title').fadeOut();
                $('#six').fadeOut();
                $('#four').attr('id','four_null');
                $('#six').attr('id','six_null');
                $('#produce_title').fadeIn();
      })      
      $('#index').click(function() {
                $('#movie').addClass(' animate__backInLeft');
                $('#movie').removeClass(' animate__backOutLeft');
                $('#history_tutle').fadeOut();
                $('#produce_title').fadeOut();
                $('#movie_title').fadeIn();
                $('#tow_title').fadeIn();
                $('#three_title').fadeIn();
                $('#four').fadeIn();
                $('#five_title').fadeIn();
                $('#six').fadeIn();
                $('#four_null').attr('id','four');
                $('#six_null').attr('id','six');
      })

  })
