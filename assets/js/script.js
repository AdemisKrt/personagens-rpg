// script.js
// Alternância de tema
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verificar preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // Atualizar ícone
    const isDark = body.classList.contains('dark-theme');
    themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    
    // Salvar preferência
    localStorage.setItem('theme', isDark ? 'dark-theme' : '');
});