 var firstheader =document.querySelector(".firstHeader")
function cancel(){
    firstheader.style.display="none"
}

// document.addEventListener('DOMContentLoaded', function() {
    
//     const firstheader =document.querySelector(".firstheader")
    
// });

// var navbarLinks = document.querySelector(".navbarLinks")
var arrival1 = document.getElementById("arrival1")

function arrival() {
    arrival1.scrollIntoView();
    
};





var sidenavbar =document.querySelector(".side-navbar")

function shownavbar(){
    sidenavbar.style.left="0"
}

function closenavbar(){
    sidenavbar.style.left="-60%"
}

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}

// Initialize the first slide
showSlide(currentIndex);