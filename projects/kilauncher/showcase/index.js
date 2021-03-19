let array = ["img/1.png", "img/2.png"]
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