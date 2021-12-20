function Meteor__init(num, type = "a"){
    const tl1 = gsap.timeline({
      repeat:-1,
      repeatDelay:1.5
    });
    
    let scale = 1;
    let distance = -2500;
    
    if(type == 'b'){
      scale=0.7;
      distance:-3500;
    }
    else if(type == 'c'){
      scale=1.2;
      distance=-1800;
    }
    
    tl1.to(
    ".meteor-" + num,{
      opacity:1,
      transform: "rotate(-45deg) scale(" + scale + ") translate3d(0, 0, 0)",
      duration:0,
    });
    
    tl1.to(
    ".meteor-" + num,
    {
      transform: "rotate(-45deg) scale(" + scale + ") translate3d(" + distance + "px, 0, 0)",
      duration:2
    });
  }
  
  Meteor__init(1);
  setTimeout(function(){
    Meteor__init(2, "b");
  },1000);
  
  setTimeout(function(){
    Meteor__init(3, "c");
  },2000);
  
  setTimeout(function(){
    Meteor__init(4, "b");
  },3000);
  
  
  