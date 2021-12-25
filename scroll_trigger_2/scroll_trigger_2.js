gsap.registerPlugin(ScrollTrigger);

const tl1 = gsap.timeline({
  scrollTrigger:{
    trigger:".section-1",
    markers:true,
    start:"top 100%-=300",
    end:"bottom 100%-=400",
    scrub:true,
    onEnter:function(){
      $('body').addClass("tl1-is-active");
    },
    onLeave:function(){
      
    },
    onEnterBack:function(){
      
    },
    onLeaveBack:function(){
      $('body').removeClass('tl1-is-active');
    }
  },
});

tl1.from('.section-1 > .con > img:first-child',{
  x:-500,
  opacity:0
});
tl1.from('.section-1 > .con > img:last-child',{
  x:500,
  opacity:0
},"-=0.4");