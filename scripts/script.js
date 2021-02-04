let time = 2000,
    cont = 0,
    images = document.querySelectorAll('#slider img'),
    max = images.length;


function nextImage() {

    images[cont].classList.remove('selected');

    cont++;

    if (cont >= max) {
        cont = 0;
        
    }
    images[cont].classList.add('selected');
}


function start() {
    setInterval(() => {
        nextImage();
    }, time)
}

window.addEventListener("load", start);


