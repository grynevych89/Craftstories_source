import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';


window.addEventListener("DOMContentLoaded", event => {
  (function(){
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuItems = document?.querySelectorAll('[data-menu-item]');
    const overlay = document?.querySelector('[data-menu-overlay]');

    burger?.addEventListener('click', (e) => {
      burger?.classList.toggle('burger--active');
      menu?.classList.toggle('mobile-menu--active');
      overlay?.classList.add('active');
      filterBtn?.classList.remove('mobile-filters--active')
      filterMenu?.classList.remove('active');

      if (menu?.classList.contains('mobile-menu--active')) {
        burger?.setAttribute('aria-expanded', 'true');
        burger?.setAttribute('aria-label', 'Закрыть меню');

        disableScroll();
      } else {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        overlay?.classList.remove('active');
        enableScroll();
      }
    });

    const filterBtn = document.querySelector(".mobile-filters");
    const filterBack = document.querySelector(".catalog-aside__back");
    const filterMenu = document.querySelector(".catalog-aside");

    if (filterBtn) {
      filterBtn.onclick = function(){
        filterBtn?.classList.toggle('mobile-filters--active')
        filterMenu?.classList.toggle('active');
        overlay?.classList.toggle('active');

        console.log('123')
      }

      filterBack.onclick = function() {
        filterMenu?.classList.remove('active');
        overlay?.classList.remove('active');
      }
    }

    overlay?.addEventListener('click', function(e) {
      if (overlay?.classList.contains('active')) {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('mobile-menu--active');
        document.querySelector('[data-modal].active')?.classList.remove('active');
        overlay?.classList.remove('active');
        filterBtn?.classList.remove('mobile-filters--active')
        filterMenu?.classList.remove('active');
        console.log(filterMenu)
        enableScroll();
      }
    });

  })();
})



