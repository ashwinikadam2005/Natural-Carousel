document.addEventListener('DOMContentLoaded',()=>{
const carouselImg=document.querySelector('.carousel-img')
const images=document.querySelectorAll('.carousel-img img')

const prevButton=document.querySelector('.carousel .prev')
const nextButton=document.querySelector('.carousel .next')
let currIndex=0
function updateCarousel() {
    const width = carouselImg.clientWidth;
    carouselImg.style.transform = `translateX(-${currIndex * 100}%)`;
}

function showImage(index) {
    if (index >= images.length) {
        currIndex = 0;
    } else if (index < 0) {
        currIndex = images.length - 1;
    } else {
        currIndex = index;
    }
    updateCarousel();
}

function nextImage() {
    showImage(currIndex + 1);
}

function prevImage() {
    showImage(currIndex - 1);
}
prevButton.addEventListener('click', prevImage);
nextButton.addEventListener('click', nextImage);
setInterval(nextImage, 3000);
}); 