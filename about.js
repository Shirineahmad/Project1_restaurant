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

// FAQ by Leslie 

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(function (question) {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;

    // Toggle answer visibility
    answer.classList.toggle('show');

    // Toggle plus/minus sign
    const toggleIcon = question.querySelector('.faq-toggle-icon');
    toggleIcon.textContent = answer.classList.contains('show') ? '-' : '+';

    // Close other answers
    faqQuestions.forEach(otherQuestion => {
      if (otherQuestion !== question) {
        const otherAnswer = otherQuestion.nextElementSibling;
        otherAnswer.classList.remove('show');
        otherQuestion.querySelector('.faq-toggle-icon').textContent = '+';
      }
    });
  });
});


// Newsletter subscribe 

document.getElementById("newsletterForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission (optional, if you want to handle submission with JS)

  // Clear the input field value
  document.getElementById("newsletterInput").value = "";
})