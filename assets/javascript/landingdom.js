const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelector('.carousel-slides');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const slideWidth = carouselContainer.offsetWidth;
const totalSlides = carouselSlides.children.length;
const slidesPerPage = 1; // Ubah menjadi 4 untuk menampilkan 4 gambar pertama kali

function showSlide() {
    const translateX = -currentIndex * slideWidth;
    carouselSlides.style.transform = `translateX(${translateX}px)`;
}

function moveToNextSlides() {
    if (currentIndex <  slidesPerPage) {
        currentIndex += slidesPerPage;
        showSlide();
    }
}

function moveToPrevSlides() {
    if (currentIndex > 0) {
        currentIndex -= slidesPerPage;
        showSlide();
    }
}

nextBtn.addEventListener('click', moveToNextSlides);
prevBtn.addEventListener('click', moveToPrevSlides);

showSlide();
