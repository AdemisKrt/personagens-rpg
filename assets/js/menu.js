const toggleBtn = document.getElementById('toggleBtn');
const menuLinks = document.getElementById('menuLinks');

toggleBtn.addEventListener('click', () => {
  menuLinks.classList.toggle('open');
});