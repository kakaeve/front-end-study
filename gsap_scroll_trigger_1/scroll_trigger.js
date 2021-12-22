//스크롤 트리거 활성화
gsap.registerPlugin(ScrollTrigger);

gsap.to(".box-1", {
  x: 400,
  rotation: 360,
  duration: 4
});

gsap.to(".box-3", {
  scrollTrigger: {
    trigger: ".box-3",
    /*
    toggleActions: "restart pause reverse reverse",
    //enter leave enter_back leave_back*/
    scrub:true,
    markers:true,
    start:"top 50%+=100px",
    end:"bottom 50%-=100px"
  },
  x: 400,
  rotation: 360,
  duration: 4
});
