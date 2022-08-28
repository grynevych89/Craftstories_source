window.addEventListener("DOMContentLoaded", event => {
  const myFilters = [...document.querySelectorAll('.catalog-filters__list')];

let step = 1;

const filterClickHandler = function () {
  const myElement = this;
  function removeClassForAllEl() {
    const myElementSiblings = document.querySelectorAll('.catalog-filters__button');
    for (let myElementSibling of myElementSiblings) {
      myElementSibling.classList.remove('active-mode');
      myElementSibling.classList.remove('active');
    }
  }

  switch (step) {
    case 1:
      removeClassForAllEl()
      myElement.classList.add('active');
      step += 1;

      break;
    case 2:
      removeClassForAllEl()
      myElement.classList.add('active-mode');
      step += 1;

      break;
    case 3:
      myElement.classList.remove('active-mode');
      myElement.classList.remove('active');
      step = 1;
      break;
  }
}

myFilters.map((myFilter) => {
  const filterItems = [...myFilter.querySelectorAll('.catalog-filters__button')];
  filterItems.map((filterItem) => {
    filterItem.addEventListener('click', filterClickHandler);
  });
});


const checkboxes = [...document.querySelectorAll('.catalog-accordion__checkbox > .checkbox')];

for (const checkbox of checkboxes) {

  if (checkbox.querySelector('.custom-checkbox > input[type="radio"]')) {
    checkbox.querySelector('.custom-checkbox > input[type="radio"]').addEventListener('click', function(e){
      [...document.querySelectorAll('.checkbox-sublist')].map(function(item){
        item.classList.remove('show');
        item.style.maxHeight = 0;
      });
      if (e.target.checked && checkbox.querySelector('.checkbox-sublist')) {
        checkbox.querySelector('.checkbox-sublist').classList.add('show');
        checkbox.querySelector('.checkbox-sublist').style.maxHeight = checkbox.querySelector('.checkbox-sublist').scrollHeight + "px";
      }
    })
  }


}

});


