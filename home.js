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

let slideIndexTestimonial = 1;
showSlidesTestimonial(slideIndexTestimonial);

function plusSlidesTestimonial(n) {
    showSlidesTestimonial(slideIndexTestimonial += n);
}

function currentSlideTestimonial(n) {
    showSlidesTestimonial(slideIndexTestimonial = n);
}
function showSlidesTestimonial(n) {
    let j;
    let slidesTestimonial = document.querySelectorAll(".carousel-testimonial");
    console.log(slidesTestimonial);
    let dotsTestimonial = document.getElementsByClassName("dot-testimonial");
    if (n > slidesTestimonial.length) { slideIndexTestimonial = 1 }

    for (j = 0; j < slidesTestimonial.length; j++) {
        slidesTestimonial[j].style.display = "none";
    }
    for (j = 0; j < dotsTestimonial.length; j++) {
        dotsTestimonial[j].className = dotsTestimonial[j].className.replace(" active-testimonail", "");
    }
    slidesTestimonial[slideIndexTestimonial - 1].style.display = "flex";
    dotsTestimonial[slideIndexTestimonial - 1].className += " active-testimonial";
}