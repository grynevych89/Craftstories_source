import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

const breakpoint = 576;
const navInners = document.querySelectorAll('.global-nav__inner');

for (const navInner of navInners ) {
  const navBtn = navInner?.querySelector('.global-nav__name');
  const navBody = document.querySelectorAll('.global-nav__wrapper');
  const navClose = navInner?.querySelector('.global-nav__close');

  const itemRemoveActive = function(){
    for (const item of navBody) {
      item.classList.remove('active');
    }
  }

  const mainNavHendler = function() {
    let containerWidth = document.documentElement.clientWidth;
    if (containerWidth < breakpoint) {
      let currentWrapper =  this.nextElementSibling;
      itemRemoveActive();
      document.body.classList.add('modal-overlay');
      currentWrapper.classList.add('active');
      disableScroll();
    }
  }

  const closeNavHendler = () => {
    let containerWidth = document.documentElement.clientWidth;
    if (containerWidth < breakpoint) {
      itemRemoveActive();
      enableScroll();
      document.body.classList.remove('modal-overlay');
    }
  }
  navBtn.onclick = mainNavHendler;
  navClose.onclick = closeNavHendler;

}









