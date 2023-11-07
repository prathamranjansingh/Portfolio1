// locomotive js - smooth scrolling
const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"), // this is for smooth scrolling to main div ke andar ka sab smooth scroll hoga
  smooth: true,
});
// gsap to animate
gsap.from(".nlink", {
  stragger: 0.1, // o.1 sec ka time leke hoga
  y: 10,
  duration: 1.3,
  ease: Power2,
  opacity: 0,
});

Shery.textAnimate("#hero-text h1" /* Element to target*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.textAnimate("#name-text h1" /* Element to target*/, {
  //Parameters are optional.
  style: 2,
  y: 10,
  delay: 0.25,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

gsap.from(".anim2", {
  y: 50,
  stragger: 0.3,
  opacity: 0,
  ease: Expo,
  duration: 0.75,
});

Shery.imageEffect("#hero-img img", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 1.45, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.03, range: [0, 5] },
    uFrequency: { value: 2.15, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 41.61 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.3392857142857142 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.17, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

gsap.from("#hero-img img", {
  y: 40,
  opacity: 0,
  duration: 1.5,
  ease: Expo.easeInOut,
});

Shery.imageEffect(".galimg img", {
  style: 6,
  config: {
    noiseDetail: { value: 9, range: [0, 100] },
    distortionAmount: { value: 2.23, range: [0, 10] },
    scale: { value: 37.19, range: [0, 100] },
    speed: { value: 0.49, range: [0, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.87997313468687 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.46, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 12.98 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
    uFrequencyX: { value: 12, range: [0, 100] },
    uFrequencyY: { value: 12, range: [0, 100] },
    uFrequencyZ: { value: 10, range: [0, 100] },
    uColor: { value: true },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
  },
});

Shery.imageEffect("#banimg", {
  style: 5,
  gooey: true,
  config: {
    a: { value: 0.5, range: [0, 30] },
    b: { value: -0.92, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.926553646746261 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 1.69, range: [1, 15] },
    durationOut: { value: 1.27, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.07, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.08, range: [0, 2], _gsap: { id: 44 } },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10.74, range: [0, 100] },
  },
});

document
  .querySelector("#vidtxt button")
  .addEventListener("mouseover", function () {
    gsap.to("#video-container video", {
      opacity: 1,
      duration: 1.5,
      ease: Power4,
    });
  });

document
  .querySelector("#vidtxt button")
  .addEventListener("mouseleave", function () {
    gsap.to("#video-container video", {
      opacity: 0,
      duration: 1.5,
      ease: Power4,
    });
  });
// shery js to animate images --- youtube ka hai sheriyans ka
