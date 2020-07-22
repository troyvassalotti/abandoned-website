const searchbar = document.getElementById('searchbar');
searchbar.addEventListener('click', e => {
  e.preventDefault;
  searchbar.setAttribute('disabled', 'true');
  searchbar.setAttribute('class', 'oops');
});