import Swiper from '../vendor/swiper';

const mySlider = document.querySelector('.main-slider__box');

for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
  if (mobileSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:1024px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(mobileSlider, {
        slidesPerView: "auto",
        spaceBetween: 10,
        observer: true,
        observeParents: true
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}


if (mySlider) {
  let mainSlider = new Swiper(mySlider, {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: false,
    allowTouchMove: true,
    fadeEffect: {
      crossFade: true
    },
    effect: "fade",
    pagination: {
      el: ".main-slider__pagination",
      clickable: true,
    },
    speed: 100,
    autoplay: {
      delay: 15000,
    },

    on: {
      slideChange() {
        if (document.querySelector('.swiper-slide.bg-video.swiper-slide-active')) {
          document.body.classList.remove('has-video');
          document.querySelector('.global-nav').removeAttribute('data-aos')
          for (const title of document.querySelectorAll('.main-slider__title')) {
            title.removeAttribute('data-aos');
          }
          document.querySelector('.vidbg-container video').playbackRate = 10;
        }
      },
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.start();
          console.log('123')
        });

        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
          console.log('123dsg')
        });
      }
    }
  });

  // mainSlider.on('init', function () {
  //   if (!document.querySelector('.swiper-slide.bg-video.swiper-slide-active')) {
  //     document.body.classList.remove('has-video');
  //   }

  //   if (document.querySelector('.swiper-slide.bg-video.swiper-slide-active')) {
  //     document.body.classList.add('has-video');
  //   }
  // });

  mainSlider.on('slideChange', function () {

  });





  // console.log(  document.querySelector('.vidbg-container video'))


}


const sectionRecomendation = document.querySelector('.section-recomendation');

if (sectionRecomendation) {
  const recomendItem = [...sectionRecomendation.querySelectorAll('.product-list__item')]
  if (recomendItem.length < 4) {
    sectionRecomendation.querySelector('.product-list').classList.add('mode');
  }
}


