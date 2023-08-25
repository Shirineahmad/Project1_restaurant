// Burger menu by Shirin 

const burgerIcon = document.getElementById('burger-icon');
const menu = document.getElementById('menu');

burgerIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
});

// Header slider by Shirin 

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

// Special menu carousel by Leslie 

const carouselContainer = document.querySelector('.special-menu-container');
const carousel = document.querySelector('.carousel-menu');

carouselContainer.addEventListener('mousemove', (e) => {
    const containerWidth = carouselContainer.clientWidth;
    const carouselWidth = carousel.clientWidth;
    const mouseX = e.clientX - carouselContainer.getBoundingClientRect().left;
    const offsetX = (mouseX / containerWidth) * (carouselWidth - containerWidth);

    carousel.style.transform = `translateX(-${offsetX}px)`;
});

// Testimonial slider by Shirin 

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
    let dotsTestimonial = document.getElementsByClassName("dot-testimonial");
    console.log(dotsTestimonial);
    if (n > slidesTestimonial.length) { slideIndexTestimonial = 1 }

    for (j = 0; j < slidesTestimonial.length; j++) {
        slidesTestimonial[j].style.display = "none";
    }
    for (j = 0; j < dotsTestimonial.length; j++) {
        dotsTestimonial[j].className = dotsTestimonial[j].className.replace(" active-testimonial", "");
    }
    slidesTestimonial[slideIndexTestimonial - 1].style.display = "flex";
    dotsTestimonial[slideIndexTestimonial - 1].className += " active-testimonial";
}

// Newsletter subscribe 

document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission (optional, if you want to handle submission with JS)

    // Clear the input field value
    document.getElementById("newsletterInput").value = "";
})

// Pop up review 

let arrayStar;
const openPopupButton = document.getElementById("add-review-button");
const popupContainer = document.getElementById("popupContainer");
const closePopUpSpan = document.querySelector(".close-popup");

openPopupButton.addEventListener("click", () => {
    popupContainer.style.display = "block";
});

popupContainer.addEventListener("click", (event) => {
    if (event.target === popupContainer) {
        popupContainer.style.display = "none";
    }
});

closePopUpSpan.addEventListener("click", () => {
    popupContainer.style.display = "none";
});

// Star system 

let activeStars = 0;

const stars = document.querySelectorAll('.star');

function rateStar(starNumber) {
    stars.forEach((star, indexStar) => {
        if (indexStar < starNumber) {
            star.classList.add('active');
            activeStars = activeStars + 1;
        } else {
            star.classList.remove('active');
        }
    });
}

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        rateStar(index);
    });
});

function hoverStar(starNumber) {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, indexStar) => {
        if (indexStar <= starNumber - 1) {
            star.classList.add('hover');
        } else {
            star.classList.remove('hover');
        }
    });
}

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        hoverStar(index);
    });
});

function resetStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('hover'));
}

stars.forEach((star, index) => {
    star.addEventListener('mouseout', () => {
        resetStars(index);
    });
});

// Show review on slider 2 testimonial 

let nameInput = document.getElementById('name-review');
let messageInput = document.getElementById('message-review');
let submitReview = document.querySelector('.submit-review-button');
let review2 = document.querySelector('.slider2review');
let dotsReview = document.querySelector('.dots-testimonial');

document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Name: ", nameInput.value);
    console.log("Message: ", messageInput.value);
    popupContainer.style.display = "none";

    let newDiv = document.createElement('div');
    newDiv.style.display = "flex";
    newDiv.style.flexDirection = 'column';
    newDiv.style.alignItems = "center";
    newDiv.style.rowGap = "15px";

    let messageShow = document.createElement('p');
    messageShow.innerText = `"${messageInput.value}"`;
    messageShow.style.color = 'black';
    messageShow.style.fontFamily = 'Open Sans, sans-serif';
    newDiv.appendChild(messageShow);

    let divForStars = document.createElement('div');
    let numberOfStars = document.createElement('p');
    numberOfStars.textContent = activeStars;
    numberOfStars.style.marginRight = "10px";
    numberOfStars.style.lineHeight = "20px";
    numberOfStars.style.textAlign = "center";
    numberOfStars.style.paddingTop = "2px";

    divForStars.appendChild(numberOfStars);

    stars.forEach(star => {
        star.removeEventListener('click', rateStar);
        star.removeEventListener('mouseover', hoverStar);
        star.removeEventListener('mouseout', resetStars);
        divForStars.appendChild(star);
    });

    divForStars.style.display = "flex";
    divForStars.style.alignItems = "center";
    newDiv.appendChild(divForStars);

    let nameShow = document.createElement('p');
    newDiv.appendChild(nameShow);
    nameShow.innerText = nameInput.value;
    nameShow.style.color = 'black';
    nameShow.style.fontFamily = 'Open Sans, sans-serif';

    // arrayStar.removeEventListener('click');
    console.log('test arraystar', arrayStar);

    review2.innerHTML = newDiv.innerHTML;
})