import './_vendor';
// import vars from './_vars';
import './_functions';
import './_components';
import AOS from 'aos';

AOS.init();


document.addEventListener("DOMContentLoaded", function(){
  document.querySelector('.order-aside') ?
  document.body.style.overflowX = 'initial':
  document.body.style.overflowX = 'hidden';
});


