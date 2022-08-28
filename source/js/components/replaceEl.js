const searchForm = document.querySelector('.catalog-aside__search');
const myAside = document.querySelector('.catalog-aside');
const myAsideTitle = myAside?.querySelector('.catalog-aside__title');
const breakpoint = 1025;
const breakpointPhone = 576;

const catalogInner = document.querySelector('.catalog-section__title');


const fixedNav = document.querySelector('.global-nav');
const fixedNavMobileParrent = document.querySelector('.navigation-section__top .container');
const fixedNavDesktopParrent = document.querySelector('.main-slider');

const replaceSearchForm = (element,parentDesktop,parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth < breakpoint) {
    parentMobile.insertAdjacentElement('afterend', element)
  };
  if (containerWidth >= breakpoint) {
    parentDesktop.insertAdjacentElement('afterend', element)
  }
}

if (myAside) {
  window.addEventListener('resize', () => {
    replaceSearchForm(searchForm,myAsideTitle,catalogInner);
  });

  window.addEventListener('DOMContentLoaded', () => {
    replaceSearchForm(searchForm,myAsideTitle,catalogInner);
  });

}

if (fixedNav) {
  window.addEventListener('resize', () => {
    replaceFixedNav(fixedNav,fixedNavDesktopParrent,fixedNavMobileParrent);
  });

  window.addEventListener('DOMContentLoaded', () => {
    replaceFixedNav(fixedNav,fixedNavDesktopParrent,fixedNavMobileParrent);
  });
}


const replaceFixedNav = (element, parentDesktop, parentMobile) => {
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth < breakpointPhone) {
    parentMobile.insertAdjacentElement('afterbegin', element);

    element.removeAttribute('data-aos')

  };
  if (containerWidth >= breakpointPhone) {
    parentDesktop.insertAdjacentElement('afterbegin', element);
    element.setAttribute('data-aos','fade-up')
  }
}

