gsap.from('.logo',{
 x:-800,
 duration: 2,
 opacity:0,
})
gsap.from('#sidemenu li',{
  x: -50,
  duration: 2,
  opacity:0,
  stagger:0.4,
})
gsap.from('.header-text p',{
  x:-900,
  opacity:0,
  duration:2.2,
})
gsap.from('.header-text h1',{
  x:-900,
  opacity:0,
  duration:3,
})