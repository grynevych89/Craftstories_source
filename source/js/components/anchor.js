const anchorButtons = document.querySelectorAll('.anchor-button');

for(const anchorButton of anchorButtons) {
  anchorButton.addEventListener('click', function(e){
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');
    window.scrollTo({
      top: document.getElementById(`${id}`).offsetTop,
      behavior: 'smooth',
    });
  });
}
