function MySlider1__init() {
    const swiper = new Swiper(".my-slider-1 .swiper-container", {
      slidesPerView: 1,
      navigation: {
        prevEl: ".my-slider-1__nav-button--left",
        nextEl: ".my-slider-1__nav-button--right"
      },
      pagination: {
        el: ".my-slider-1__pagination",
        clickable: true,
        renderBullet: function (index, className) {
          const num = index + 1;
          const url = "https://picsum.photos/id/" + num + "/100/100";
          return (
            '<div class="' +
            className +
            '"><img class "block" src="' +
            url +
            '"></div>'
          );
        }
      },
      loop: true
    });
  }
  MySlider1__init();
  
  /*
  function Prod_List__init() {
    for (let i = 1; i <= 9; i++) {
      gsap.from(".prod-list > ul > li:nth-child("+i+")", {
        duration: 1,
        x: 400,
        opacity: 0,
        ease: "cric.out",
        scrollTrigger: {
          start: "top 100%",
          end: "top 70%",
          trigger: ".prod-list > ul > li:nth-child(" + i + ")",
          scrub: true
        }
      });
    }
  }
  */
  
  function Prod_List__init() {
    $(".prod-list > ul > li").each(function(i, node){
      gsap.from(node, {
        duration: 1,
        x: 400,
        opacity: 0,
        ease: "cric.out",
        scrollTrigger: {
          start: "top 100%",
          end: "top 70%",
          trigger: node,
          scrub: true
        }
      });
    });
  }
  
  Prod_List__init();
  