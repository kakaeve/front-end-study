function my_slider_box_1__init() {
    const swiper = new Swiper('.my-slider-box-1 .swiper-container', {
      autoplay:{
        delay:10000,
        disableOnIteraction:false,
      },
      pagination: {
        el: ".my-slider-box-1 .swiper-pagination",
        clickable:true,
        renderBullet: function(index, className){
          let num = index+1;
          let img = '<img src=https://picsum.photos/id/' + num + '/100/100>';
          
          return bullet = '<span class="' + className + '">' + img + '</span>';
        },
      },
      slidesPerView:1,
      spaceBetween:0,
      loop:false,
      navigation:{
        nextEl: '.my-slider-box-1 .my-slider-box-1__btn-right',
        prevEl: '.my-slider-box-1 .my-slider-box-1__btn-left'
      },
    });
  }
  my_slider_box_1__init();
  
  
  