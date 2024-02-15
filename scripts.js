let links = document.querySelector("nav");
let hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener('click', function(){
    links.classList.toggle('active');
})