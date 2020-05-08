document.querySelector('.menu').addEventListener('click', () => {
  document.querySelector('header').classList.toggle('show');
  document.querySelector('.menu .close').classList.toggle('show');
  document.querySelector('.menu .bars').classList.toggle('show');
});

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('links')) {
    document.querySelector('header').classList.remove('show');
    document.querySelector('.menu .close').classList.remove('show');
    document.querySelector('.menu .bars').classList.remove('show');
  }
});


  // Update footer date
  let footerDates = document.querySelectorAll('footer .copyright span');
  for (let footerDate of footerDates) {
    let year = new Date().getFullYear();
    footerDate.textContent = year;
  }