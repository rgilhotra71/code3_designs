// variables
var $header_top = $('.header-top');
var $nav = $('nav');

$(function () {
  AOS.init();
  //$('#fp-nav').hide();
})

// toggle menu 
$header_top.find('.toggle-menu').on('click', function () {
  $(this).parent().toggleClass('open-menu');
});

var fullpageJs = document.getElementById('fullpage');
if (fullpageJs) {

  var myFullpage = new fullpage('#fullpage', {
    verticalCentered: true,
    licenseKey: 'YOUR_KEY_HERE',
    anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'homeSection', 'aboutUs', 'aboutSlide', 'aboutSlide1', 'aboutSlide2', 'letUsKnowSection', 'codeSection', 'footerSection'],
    menu: '#menu',
    afterLoad: function (origin, destination, direction) {
      history.pushState(null, null, " ");
      // if (destination.index == 0) {
      //   setTimeout(function () {
      //     $('#moveDown').trigger('click');
      //   }, 2000)
      // }

      // else if (destination.index == 1) {
      //   setTimeout(function () {
      //     $('#moveDown').trigger('click');
      //   }, 2000)
      // }

      if (destination.index == 2) {
        $('.st0').css('fill', '#fff');
        $('.getTouch').css('border-color', '#2984FD').css('color', '#2984FD');
        $('.toggle-menu i').css('background', '#2984FD');
      }
      if (destination.index === 3) {
        $('.st0').css('fill', '#fff');
        $('.getTouch').css('border-color', '#2984FD').css('color', '#2984FD');
        $('.toggle-menu i').css('background', '#2984FD');
      }
      else if (destination.index == 4) {
        $('.st0').css('fill', '#fff');
        $('.getTouch').css('border-color', '#2984FD').css('color', '#2984FD');
        $('.toggle-menu i').css('background', '#2984FD');
      }
      else if (destination.index == 5) {
        $('.st0').css('fill', '#fff');
        $('.getTouch').css('border-color', '#2984FD').css('color', '#2984FD');
        $('.toggle-menu i').css('background', '#2984FD');
      }
      else if (destination.index == 6) {
        $('.st0').css('fill', '#fff');
        $('.getTouch').css('border-color', '#2984FD').css('color', '#2984FD');
        $('.toggle-menu i').css('background', '#2984FD');
      }
      else if (destination.index == 7) {
        $('.st0').css('fill', '#fff');
        $('.getTouch').css('border-color', '#2984FD').css('color', '#2984FD');
        $('.toggle-menu i').css('background', '#2984FD');
      }
      // else if (destination.index == 8) {
      //   $('.st0').css('fill', '#000');
      //   $('.getTouch').css('border-color', '#000000').css('color', '#000000');
      //   $('.toggle-menu i').css('background', '#000000');
      // }
      else if (destination.index == 8) {
        $('.st0').css('fill', '#000');
        $('.getTouch').css('border-color', '#2984FD').css('color', '#2984FD');
        $('.toggle-menu i').css('background', '#2984FD');

        var tl = new TimelineMax();
        //tl.from($('.boxContent'), 0.65, { opacity: 0, duration: .3, y: 150, stagger: 0.1 });

        $('.boxContent').css(
          {
            'opacity': 1,
            'transform': 'translateY(0)'
          }
        );

      }
      else if (destination.index == 9) {
        $('.st0').css('fill', '#000');
        $('.getTouch').css('border-color', '#000000').css('color', '#000000');
        $('.toggle-menu i').css('background', '#000000');

        $('.tab-content').css(
          {
            'opacity': 1,
            'transform': 'translateY(0)'
          }
        );
        $('ul.nav-tabs').css(
          {
            'opacity': 1,
            'transform': 'translateX(0)'
          }
        );
        $('.header-top').fadeIn()
      }
    }
  });
}
$('nav li a').click(function () {
  $('.header-top').removeClass('open-menu')
});

$(document).ready(function () {

  //alert('here');
  $('.tabs .nav-link').click(function () {
    $('.panel').hide();
    $('.tabs .nav-link.active').removeClass('active');
    $(this).addClass('active');

    var panel = $(this).attr('data-link');
    $(panel).fadeIn(300);

    return false;  // prevents link action

  });  // end click 
  $('.tabs li:first .nav-link').click();
}); // end ready

// $('.letUsKnowSection').click(function () {
//   $('.panel').hide();
//   $('.defaultContent').fadeIn();
//   $('.nav-link').removeClass('active');
// })


$('.signupFree > div').click(function () {
  $('.sign-upoverlay').remove();
  $('.mktoLayoutLeft').css('opacity', '1').css('z-index', '9999999');
  $('body').append("<div class='sign-upoverlay'></div>")
});

setTimeout(function () {
  $('.mkoClose').click(function () {
    $('.mktoLayoutLeft').css('opacity', '0').css('z-index', '-1');
    $('.sign-upoverlay').remove();
  });
}, 1000);


setTimeout(function () {
  $('#menu li a:first-child').click();
}, 500);

$('.moveDown').click(function () {
  fullpage_api.moveSectionDown();
});

setTimeout(function () {
  $('.fp-viewing-sectionOne .moveDown').trigger('click');
}, 3500);

setTimeout(function () {
  $('.fp-viewing-sectionTwo .moveDown').trigger('click');
}, 6000);

setTimeout(function () {
  $('.fp-viewing-sectionThree .moveDown').trigger('click');
}, 7500);

$(window).scroll(function () {
  $('.innerPage-header').addClass('sticky');

})

$(window).scroll(function () {
  if ($(window).scrollTop() >= 150) {
    $('.innerPage-header').addClass('sticky');
  }
  else {
    $('.innerPage-header').removeClass('sticky');
  }
});
setTimeout(function () {
  $('.header-top').fadeIn(100);
}, 1000);


const urlParams = new URLSearchParams(window.location.search);
const leadID = urlParams.get('aliId');

if (leadID) {
  alert("test");
  $('.mkoContactform').css('display', 'none');
  $('.thankYou').css('display', 'block');
}



