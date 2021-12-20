//gsap 기본 시작

/*gsap.to('.box-1',{
  transform:"translateX(100px) scale(1.5) rotate(181deg)",
  duration:2
});*/

/*
gsap.to('.box-1',{
  x:100,
  scale:1.5,
  rotation:180
});*/

/*
gsap.from('.box-1',{
  x:100,
  scale:1.5,
  rotation:360
});
*/

/*
const tl = gsap.timeline();
tl.to(".box",{duration:1, x:100})
  .to(".box",{duration:1, backgroundColor: "#f38630"}, "+=1.5")
  .to(".box",{duration:1, rotation:-360});
*/

/*
const tl1 = gsap.timeline();
tl1.to(".box-1",{duration:3, x:500})
   .to(".box-1",{duration:1, rotation:360}, "-=3")
   .to(".box-1",{duration:1, backgroundColor:"pink"})
   .to(".box-1",{duration:1, backgroundColor:"green", x:0});
*/

/*
gsap.fromTo(".box-1",{y:50}, {duration:3, x:500, y:0});
*/

/*const tl1 = gsap.timeline();
tl1.fromTo(".box-1",{y:50}, {duration:3, x:500, y:0})
   .to(".box-1",{duration:3, x:0, y:0});
*/

//gsap 기본 끝

//stagger 시작

/*
gsap.to(".box", {duration:1, rotation:360, y:100, stagger:{amount:2, from:"edges"}});
*/

/*
gsap.timeline()
.to(".box",{duration:1, rotation:360, y:100, stagger:{
  amount:1,
  from:"center"
}})
.to(".box", {duration:1, rotation:0, y:0 , stagger:{
  amount:1,
  from:"edges"
}});
*/

//stagger 끝

/*텍스트 애니메이션 시작*/

const tl1 = gsap.timeline({
    repeat:-1,//회수만큼 반복 -1은 무한
    repeatDelay:1//반복사이의 시간
  });
  
  tl1.from(".section-1__text > span > span",{
    opacity:0,
    y:100,
    duration:1,
    stagger:0.5
  })
  .to(".section-1__text > span > span",{
    opacity:0,
    y:-100,
    duration:1,
    stagger:{
      each:"0.1",
      from:"end"
    }
  }, "+=2");
  
  /*텍스트 애니메이션 끝*/
  
  
  