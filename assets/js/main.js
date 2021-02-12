document.body.classList.add('js');

const toggle = document.querySelector('#toggle');
const menu = document.querySelector('#menu');
const header = document.querySelector('.site-header');

toggle.addEventListener('click', function () {
  if (menu.classList.contains('is-active')) {
    this.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-active');
    header.classList.remove('opened');
    document.body.removeAttribute('style');
  } else {
    menu.classList.add('is-active');
    this.setAttribute('aria-expanded', 'true');
    header.classList.add('opened');
    document.body.setAttribute('style', 'overflow: hidden');
  }
});

const searchbar = document.getElementById('searchbar');
const removeSearchbar = () => {
  searchbar.remove();
}
searchbar.addEventListener('click', e => {
  e.preventDefault();
  searchbar.setAttribute('disabled', 'true');
  searchbar.setAttribute('class', 'oops');
  setTimeout(removeSearchbar, 2000);
}, {once: true});
