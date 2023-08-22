// Burger menu 

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

// Contact form clear by Shirin 
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission (optional, if you want to handle submission with JS)

    // Clear the input field value
    document.getElementById("yourName").value = "";
    document.getElementById("yourEmail").value = "";
    document.getElementById("yourMessage").value = "";
})

// Newsletter subscribe 

document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission (optional, if you want to handle submission with JS)

    // Clear the input field value
    document.getElementById("newsletterInput").value = "";
})