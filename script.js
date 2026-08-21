const btnMenu = document.getElementById('btn-menu');
const navMenu = document.getElementById('nav-menu');

btnMenu.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('abierto');
  btnMenu.setAttribute('aria-expanded', isOpen);
});