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

let bannerMain = document.getElementById('banner-content-1');
let bannerMaintext = "Os melhores lugares do Brasil";
let tam = bannerMaintext.length;
let count = 0;


setInterval(()=> {
    count++;
    let myText = bannerMaintext.substring(0, count);
    bannerMain.innerText = myText + "|";
    
    if (count == tam) {
        count = 0;
    }
}, 150)

