gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  // Defaults are used by all ScrollTriggers
  toggleActions: "restart pause resume pause", // Scoll effect Forward, Leave, Back, Back Leave
  markers: false // Easaly remove markers for production 
});

const timelineHeader = gsap.timeline({
  scrollTrigger: {
    id: "ZOOM", // Custom label to the marker
    trigger: "#header-zoom", // What element triggers the scroll
    scrub: 0, // Add a small delay of scrolling and animation. `true` is direct
    start: "top top", // Start at top of Trigger and at the top of the viewport
    end: "+=100% 50px", // The element is 500px hight and end 50px from the top of the viewport
    pin: true // Pin the element true or false
  } });


timelineHeader.
to(".image-1", {
  scale: .9 },
"sameTime").
to(".image-2", {
  scale: 10 },
"sameTime");