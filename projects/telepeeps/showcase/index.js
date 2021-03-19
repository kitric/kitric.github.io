let array = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg"]
let currentImage = 0;

function nextImage() {
    currentImage = currentImage + 1;

    if (currentImage > array.length - 1){
        currentImage = 0;
    }

    document.getElementById("imgElement").src = array[currentImage];

    updateText();
}

function previousImage() {
    currentImage = currentImage - 1;

    if (currentImage < 0) {
        currentImage = array.length - 1;
    }

    document.getElementById("imgElement").src = array[currentImage];

    updateText();
}

function updateText() {
    document.getElementById("bottom").innerHTML = (currentImage + 1) + "/" + array.length;
}