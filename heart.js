let clickCount = 0;
const fotos = document.getElementsByClassName('fv-post');
const hearts = document.getElementsByClassName('heart');

// Adicione um evento a cada elemento com a classe 'fv-post'
for (let i = 0; i < fotos.length; i++) {
    const foto = fotos[i];
    foto.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 2) {
            clickCount = 0;
            for (let j = 0; j < hearts.length; j++) {
                const heart = hearts[j];
                heart.classList.add("block");

                // Hide the heart after the animation completes
                setTimeout(() => {
                    heart.classList.remove("block");
                }, 2000);
            }
        }
    });
}
