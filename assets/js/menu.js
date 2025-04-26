const toggleBtn = document.getElementById('toggleBtn');
const menuLinks = document.getElementById('menuLinks');

toggleBtn.addEventListener('click', (event) => {
  event.stopPropagation(); // Impede que o clique no botão feche o menu imediatamente
  menuLinks.classList.toggle('open');
});

// Fecha o menu se clicar fora
document.addEventListener('click', (event) => {
  if (!menuLinks.contains(event.target) && !toggleBtn.contains(event.target)) {
    menuLinks.classList.remove('open');
  }
});