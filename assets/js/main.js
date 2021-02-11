const searchbar = document.getElementById('searchbar');
const removeSearchbar = () => {
  searchbar.remove();
}
searchbar.addEventListener('click', e => {
  e.preventDefault();
  searchbar.setAttribute('disabled', 'true');
  searchbar.setAttribute('class', 'oops');
  setTimeout(removeSearchbar, 2000);
  // TODO: make this more stable, maybe use the animation api with javascript instead of css so the thing gets removed upon animation ending instead of me deciding how long it is
}, {once: true});
