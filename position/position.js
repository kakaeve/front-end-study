
const $bottom_line = $('section > div');

$('section > ul > li').mouseenter(function(){
  const $this = $(this);
  
  const position = $this.position();
  
  width = $this.outerWidth();
  
  console.log("position.left : " + position.left);
  console.log("position.top : " + position.top);
  console.log("width : " + width);
  
  $bottom_line.css({
    left:position.left,
    top:position.top +40,
    width:width
  });
  
});