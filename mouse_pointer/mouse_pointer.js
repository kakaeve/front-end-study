console.clear();

const $cursor = $('.cursor');
const $cursor_shadow = $('.cursor-shadow');

$(window).mousemove(function(e){
  $cursor.css({
    top:e.clientY,
    left:e.clientX
  });
  
  $cursor_shadow.css({
    top:e.clientY,
    left:e.clientX
  });
});

$('.cursor-big').mouseenter(function(){
  $('html').addClass('need-to-cursor-big');
});

$('.cursor-big').mouseleave(function(){
  $('html').removeClass('need-to-cursor-big');
});