// Espera o DOM carregar antes de rodar
document.addEventListener('DOMContentLoaded', function() {

    const toggleButton = document.getElementById('toggle-theme'); // Botão de alternar tema
    const body = document.body;

    // Função que aplica o tema salvo
    function aplicarTemaSalvo() {
        const temaSalvo = localStorage.getItem('tema'); // Busca no localStorage
        if (temaSalvo === 'dark') {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Função que troca o tema
    function alternarTema() {
        body.classList.toggle('dark-mode');

        // Salva no localStorage o tema atual
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('tema', 'dark');
        } else {
            localStorage.setItem('tema', 'light');
        }
    }

    // Quando clicar no botão, troca o tema
    toggleButton.addEventListener('click', alternarTema);

    // Quando a página carregar, aplica o tema salvo
    aplicarTemaSalvo();

});
