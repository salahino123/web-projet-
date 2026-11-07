document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('page-loader');
  if (loader) setTimeout(() => loader.classList.add('hidden'), 1300);

  const menuButton = document.getElementById('menu-button');
  const menu = document.getElementById('menu-principal');
  const btnVilles = document.getElementById('btn-villes');
  const listeVilles = document.getElementById('liste-villes');

  const closeMenu = () => {
    if (!menuButton || !menu) return;
    menu.classList.remove('show');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Ouvrir le menu');
    menuButton.textContent = '☰';

    if (listeVilles && btnVilles) {
      listeVilles.style.display = 'none';
      btnVilles.setAttribute('aria-expanded', 'false');
    }
  };

  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('show');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      menuButton.textContent = isOpen ? '×' : '☰';

      if (!isOpen && listeVilles && btnVilles) {
        listeVilles.style.display = 'none';
        btnVilles.setAttribute('aria-expanded', 'false');
      }
    });

    menu.addEventListener('click', (event) => {
      const link = event.target instanceof Element ? event.target.closest('a') : null;
      if (link && link.id !== 'btn-villes') {
        closeMenu();
      }
    });

    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const wasOpen = menu.classList.contains('show');
        closeMenu();
        if (wasOpen) menuButton.focus();
      }
    });
  }

  if (btnVilles && listeVilles) {
    btnVilles.addEventListener('click', (event) => {
      event.preventDefault();
      const isOpen = listeVilles.style.display !== 'flex';
      listeVilles.style.display = isOpen ? 'flex' : 'none';
      btnVilles.setAttribute('aria-expanded', String(isOpen));
    });
  }
});