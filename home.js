// Burger menu 

const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');

burgerIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});

// Header slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Special menu sliders

const carouselContainer = document.querySelector('.special-menu-container');
const carousel = document.querySelector('.carousel-menu');

carouselContainer.addEventListener('mousemove', (e) => {
  const containerWidth = carouselContainer.clientWidth;
  const carouselWidth = carousel.clientWidth;
  const mouseX = e.clientX - carouselContainer.getBoundingClientRect().left;
  const offsetX = (mouseX / containerWidth) * (carouselWidth - containerWidth);
  
  carousel.style.transform = `translateX(-${offsetX}px)`;
});
// testimoniol slider
const carouselContainerTestimonial = document.querySelector('.testimonial-container');
const carouselTestimonial = document.querySelector('.carousel-testimonial');

carouselContainerTestimonial.addEventListener('mousemove', (e) => {
    const containerTestimonialWidth = carouselContainerTestimonial.clientWidth;
    const carouselTestimonialWidth = carouselContainer.clientWidth;
    const mouseX = e.clientX - carouselContainerTestimonial.getBoundingClientRect().left;
    const offsetX = (mouseX / containerTestimonialWidth) * (carouselTestimonialWidth - containerTestimonialWidth);

    carouselContainer.style.transform = `translateX(-${offsetX}px)`;
});
