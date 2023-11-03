let contadorClick = 0;
const fotos = document.getElementsByClassName('fv-post');
const hearts = document.getElementsByClassName('heart');

for (let i = 0; i < fotos.length; i++) {
    const foto = fotos[i];
    foto.addEventListener('click', () => {
        contadorClick++;

        if (contadorClick === 2) {
            contadorClick = 0;
            for (let j = 0; j < hearts.length; j++) {
                const heart = hearts[j];
                heart.classList.add("block");

                setTimeout(() => {
                    heart.classList.remove("block");
                }, 2000);
            }
        }
    });
}
