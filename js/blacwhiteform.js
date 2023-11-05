const white = document.querySelectorAll('.white');
const body = document.querySelector('body')
const botao = document.querySelector('.hamburg');

botao.addEventListener('click', () =>{

    body.classList.toggle('bg-white')

    white.forEach((filhos) =>{
        filhos.classList.toggle('black')
    })

})