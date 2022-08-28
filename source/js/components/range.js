import noUiSlider from 'nouislider';

let rangeSliders = [...document.querySelectorAll('.range-slider')];

const rangeSlidersValues = [...document.querySelectorAll('.range-values span')];

rangeSliders.map((slider)=>{
  noUiSlider.create(slider, {
    start: [10, 40],
    // snap: true,
    step: .10,
    connect: true,
    range: {
      'min': 0,
      'max': 50
    },
    format: {
      to: function (value) {
          return value.toPrecision(3);
      },
      from: function (value) {
        return value;
      }
    }
  });

  let snapValues = [
      document.querySelector('.range-values__lower'),
      document.querySelector('.range-values__upper')
  ];

  slider.noUiSlider.on('update', function (values, handle) {
      snapValues[handle].value = values[handle];
  });
});

