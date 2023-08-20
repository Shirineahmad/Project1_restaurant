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
// script.js
let currentContent = 0;
let isHovering = false; 

function showContent(contentIndex) {
    const contentWidth = document.querySelector('.carousel-container-testimonial').offsetWidth;
    const dots = document.querySelectorAll('.dot-testimonial');

    currentContent = contentIndex;
    const offset = -currentContent * contentWidth;
    document.querySelectorAll('.carousel-testimonial').forEach(content => {
        content.style.transition = 'transform 0.5s ease-in-out'; // Add fade transition
        
        content.style.transform = `translateX(${offset}px)`;
    });
    // setTimeout(() => {
    //     document.querySelectorAll('.carousel-testimonial').forEach((content, index) => {
    //         content.style.transition = `opacity ${index === currentContent ? 1 : 0.5}s`; // Adjust the duration as needed
    //         content.style.opacity = index === currentContent ? 1 : 0; // Show/hide content with opacity
       
    //     });
    // }, 1000); // Delay the opacity change slightly after the transition starts

    dots.forEach((dot, index) => {
        if (index === currentContent) {
            dot.classList.add('active-testimonial');
        } else {
            dot.classList.remove('active-testimonial');
        }
    });
}

// Initial slide display
// showContent(currentContent);

// hover

let currentHover = 0;

function handleHoverAnimation(contentIndexHover) {
    const carouselContainer = document.querySelector('.carousel-container-testimonial');
    const carouselItems = document.querySelectorAll('.carousel-testimonial');

    const carouselWidth = carouselContainer.offsetWidth;
    const offsetHover = contentIndexHover * carouselWidth * -1;

    carouselContainer.addEventListener('mouseenter', () => {
        carouselItems.forEach(contentHover => {
            contentHover.style.transition = 'transform 0.5s ease-in-out';
            contentHover.style.transform = `translateX(${offsetHover}px)`;
        });
    });

    carouselContainer.addEventListener('mouseleave', () => {
        carouselItems.forEach(contentHover2 => {
            contentHover2.style.transition = 'none';
            contentHover2.style.transform = 'translateX(0)';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showContent(currentHover);
    handleHoverAnimation(currentHover);
});
