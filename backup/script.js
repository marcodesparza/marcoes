let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slide');
const status = document.getElementById('status');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
    status.textContent = `${index + 1} / ${slides.length}`;
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
}

// Inicializa la primera diapositiva
showSlide(currentSlideIndex);
