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

// FAQ 

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(function (question) { 
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    answer.classList.toggle('show');

    faqQuestions.forEach(otherQuestion => {
      if (otherQuestion !== question) {
        const otherAnswer = otherQuestion.nextElementSibling;
        otherAnswer.classList.remove('show');
      }
    });
  });
});
