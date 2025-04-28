// Script para abrir/fechar o submenu Personagens ao clicar

const menuPersonagens = document.getElementById('menu-personagens');

menuPersonagens.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede que clique feche imediatamente
    menuPersonagens.classList.toggle('active');
});

// Fecha o submenu clicando fora
document.addEventListener('click', () => {
    menuPersonagens.classList.remove('active');
});
