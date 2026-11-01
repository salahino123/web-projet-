document.addEventListener('DOMContentLoaded', function() {
  const loader = document.getElementById('page-loader');
  
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 1300);
});