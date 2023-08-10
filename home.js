
const burgerMenu = document.querySelector(".burger-menu");
const navLinks = document.querySelector(".nav-links");
console.log(burgerMenu);
console.log(navLinks);


    
burgerMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('burger-menu')) {
        navLinks.classList.toggle('active');
    }
})
