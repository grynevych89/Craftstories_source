import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

const overlay = document.querySelector('[data-menu-overlay]');
const ageModalBlock = document.querySelector('[data-modal="age"]');
const regModalBlock = document.querySelector('[data-modal="reg"]');
const cartModalBlock = document.querySelector('[data-modal="cart"]');
const closeModalBtns = [...document.querySelectorAll('.close-modal')];
const showModalReg = [...document.querySelectorAll('[show-modal]')];
const showModalCart = [...document.querySelectorAll('[show-cart]')];
const forgotBtn = document.querySelector('[data-forgot]');

let age = localStorage.getItem('age');

function hideMobileMenu(){
  document?.querySelector('[data-burger]').classList.remove('burger--active')
  document?.querySelector('[data-menu]').classList.remove('mobile-menu--active');
}

if (ageModalBlock) {

  if (age != 18) {
    document.addEventListener('DOMContentLoaded', ageModal(ageModalBlock))
  }

  function ageModal(modal){
    modal.classList.add('active');
    document.body.classList.add('dis-scroll');
    document.body.classList.add('modal-overlay');

    modal.addEventListener('click', function(e){
      if(e.target.classList.contains('age-modal__btn--yes')) {
        localStorage.setItem('age', '18');
        modal.classList.remove('active');
        document.body.classList.remove('dis-scroll');
        document.body.classList.remove('modal-overlay');
      }
    })
  }

}

showModalReg.map(function(item){
  item.addEventListener('click', function(e){
    e.preventDefault();
    regModalBlock.classList.add('active');
    overlay.classList.add('active');
    document.body.classList.remove('dis-scroll');
    hideMobileMenu()
    disableScroll();
  });
})

closeModalBtns.map(function(btn){
  btn.addEventListener('click', function(){
    document.querySelector('[data-modal].active').classList.remove('active');
    overlay?.classList.remove('active');
    // document.body.classList.remove('dis-scroll');
    document.body.classList.remove('modal-overlay');
    document?.querySelector('[data-burger]').classList.remove('burger--active')
    document?.querySelector('[data-menu]').classList.remove('mobile-menu--active');
    enableScroll();
  })
});

forgotBtn.onclick = function(){
  document.querySelector('[data-modal].active').classList.remove('active');
  document.querySelector('[data-modal="forgot"]').classList.add('active');
  hideMobileMenu();
  disableScroll();
}

document.querySelector('[data-back]').onclick = function(){
  document.querySelector('[data-modal="forgot"]').classList.remove('active');
  regModalBlock.classList.add('active');
  hideMobileMenu();
  disableScroll();
}


showModalCart.map(function(btn){
  btn.addEventListener('click', function(){
    cartModalBlock.classList.add('active');
    overlay.classList.add('active')
    hideMobileMenu();
    disableScroll();
  })
})




