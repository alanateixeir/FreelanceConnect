const white = document.querySelectorAll('.white');
const body = document.querySelector('body')
const botao = document.querySelector('.hamburg');
const back = document.querySelector('.container-banner')
const fto = document.querySelector('.foto-perfil')

botao.addEventListener('click', () =>{

    body.classList.toggle('bg-white')
    back.classList.toggle('border-white')
    fto.classList.toggle('border-white')

    white.forEach((filhos) =>{
        filhos.classList.toggle('black')
    })

})