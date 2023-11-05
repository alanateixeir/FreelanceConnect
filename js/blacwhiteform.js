const white = document.querySelectorAll('.white');
const body = document.querySelector('body');
const botao = document.querySelectorAll('.hamburg');

botao.forEach((botao) => {
    botao.addEventListener('click', () => {
        body.classList.toggle('bg-white');
        white.forEach((filhos) => {
            filhos.classList.toggle('black');
        });
    });
});
