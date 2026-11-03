document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('page-loader');
  if (loader) setTimeout(() => loader.classList.add('hidden'), 1300);

  const btnVilles = document.getElementById('btn-villes');
  const listeVilles = document.getElementById('liste-villes');

  btnVilles.addEventListener('click', (e) => {
    e.preventDefault();
    if (listeVilles.style.display === 'flex') {
      listeVilles.style.display = 'none';
    } else {
      listeVilles.style.display = 'flex';
    }
  });
});