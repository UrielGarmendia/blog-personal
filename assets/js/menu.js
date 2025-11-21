(function () {
  const menuButton = document.getElementById('btn-menu');
  const navMenu = document.querySelector('.nav-menu');

  if (!menuButton || !navMenu) return;

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle('open');
    menuButton.classList.toggle('is-open', isOpen);
    menuButton.setAttribute('aria-expanded', isOpen);
  };

  menuButton.addEventListener('click', toggleMenu);

  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
})();
