const white = document.querySelectorAll('.white');
const body = document.querySelector('body')
const loading = document.querySelector('.loading')
const botao = document.querySelector('.hamburg');

botao.addEventListener('click', () =>{

    body.classList.toggle('bg-white')
    loading.classList.toggle('loading-b')

    white.forEach((filhos) =>{
        filhos.classList.toggle('black')
    })

})