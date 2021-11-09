
$(document).ready(function() {
    // grab the initial top offset of the navigation 
       var stickyNavTop = $('#navber-part').offset().top;
       
       // our function that decides weather the navigation bar should have "fixed" css position or not.
       var stickyNav = function(){
        var scrollTop = $(window).scrollTop(); // our current vertical position from the top
             
        // if we've scrolled more than the navigation, change its position to fixed to stick to top,
        // otherwise change it back to relative
        if (scrollTop > stickyNavTop) { 
            $('#navber-part').addClass('sticky');
        } else {
            $('#navber-part').removeClass('sticky'); 
        }
    };
  
    stickyNav();
    // and run it again every time you scroll
    $(window).scroll(function() {
      stickyNav();
    });
  });


  
  $('.service-slid').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });