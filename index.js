$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      nav:true,
      dots: false,
      responsiveClass: true,
      autoplayTimeout: 9000,
      autoplayHoverPause: false,
      autoplaySpeed: 1000,
      autoplay: true,
    
      responsive: {
        0: {
          items: 1,
        
          autoHeight: true,
        },
        400: {
          items: 1,
  
          autoHeight: true,
        },
        600: {
          items: 1,
        
          autoHeight: true,
        },
        1000: {
          items: 1,
          
          loop: true,
        },
      },
    });
   
  });