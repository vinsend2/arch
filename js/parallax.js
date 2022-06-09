`use strict`;



const footerScene = document.getElementById('footer-scene');
const aboutScene = document.getElementById('about-scene');
const aboutScene2 = document.getElementById('about-scene-2');
const featuresScene = document.getElementById('features-scene');

const featuresScene2 = document.getElementById('features-scene2');

const firstSlideScene = document.getElementById('first-slide-scene');
const secondSlideScene = document.getElementById('second-slide-scene');
const thirdSlideScene = document.getElementById('third-slide-scene');
const fourthSlideScene = document.getElementById('fourth-slide-scene');
const fifthSlideScene = document.getElementById('fifth-slide-scene');
const sixthSlideScene = document.getElementById('sixth-slide-scene');
const seventhSlideScene = document.getElementById('seventh-slide-scene');


if($(window).width() > 768) {


const featursParallax = new Parallax(featuresScene, {
    selector: '.parallax-layer',
    pointerEvents: false,
});


const featursParallax2 = new Parallax(featuresScene2, {
    selector: '.parallax-layer',
    pointerEvents: false,
});


}


// const scroll = new SmoothScroll('.intro__more', {
//   speed: 1000,
//   speedAsDuration: true
// });