let slideIndex = 0;
let slides, dots;

function initSlides() {
    slides = document.getElementsByClassName("testimonial");
    dots = document.getElementsByClassName("dot");
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides(true);
}

function showSlides(manual = false) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
    if (!manual) {
        setTimeout(showSlides, 3000); // Muda o slide a cada 3 segundos
    }
}

document.addEventListener("DOMContentLoaded", initSlides);
