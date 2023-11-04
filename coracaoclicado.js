const iconcoracao = document.querySelectorAll('.fa-heart')



iconcoracao.forEach((filhos) =>{

    filhos.addEventListener('click', () =>{
        filhos.classList.toggle('fa-solid')
    })

})