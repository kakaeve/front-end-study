function Top_bar__init(){
    $('.top-bar__menu-box-1 ul > li').click(function(){
      $(this).siblings('.hover').removeClass('hover');
      
      $(this).find('.hover').removeClass('hover');
      
      $(this).addClass('hover');
      return false;
    });
    
    $('body').click(function(){
      $('.top-bar__menu-box-1 ul > li.hover').removeClass('hover');
    });
  }
  
  Top_bar__init();