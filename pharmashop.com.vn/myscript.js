  $(".various,.zoombtn").fancybox({
    maxWidth  : 800,
    maxHeight : 600,
    fitToView : true,
    width   : '90%',
    height    : '90%',
    autoSize  : false,
    closeClick  : false,
    openEffect  : 'none',
    wrapCSS : 'myfan',
    closeEffect : 'none'
  });
  $('.disable-link').click(function(e){
    e.preventDefault();
  })

jQuery(document).ready(function( jQuery ) {
        jQuery('.counter').counterUp({
            delay: 20,
            // time: 1000
        });
var owl = $('.owl-carousel-hot');
owl.owlCarousel({
          loop:false,
          margin:30,
          nav:true,
          loaded:true,
          autoplay:false, 
          dots:false, 
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },            
        960:{
            items:4
        },
        1200:{
            items:5
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});
owl.bind('touchmove', function(e){e.stopPropagation(); });
//Khuyến mãi
      var bannerkm = $('.bannerkm');
      bannerkm.owlCarousel({
                loop:true,
                margin:15,
                nav:true,
                loaded:true,
                autoplay:true,  
                responsiveClass:true,
                dots:false,
              responsive:{
                  0:{
                      items:1
                  },
                  600:{
                      items:1
                  },            
                  960:{
                      items:2
                  },
                  1200:{
                      items:2
                  }
              }
      });
      bannerkm.on('mousewheel', '.owl-stage', function (e) {
          if (e.deltaY>0) {
              owl.trigger('next.owl');
          } else {
              owl.trigger('prev.owl');
          }
          e.preventDefault();
      });
      bannerkm.bind('touchmove', function(e){e.stopPropagation(); });

        
    });   