function SectionSlider__init(no) {
    var mySwiper = new Swiper('.section-slider-' + no + ' .swiper-container', {
      effect:'fade',
      autoplay:{
        delay:5000,
      },
      pagination:{
        el:'.section-slider-' + no + ' .swiper-pagination',
        clickable:true,
      },
    });
  }
  
  SectionSlider__init(1);