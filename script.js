console.log("Welcome to My IWT Lab Assignments page!");


const hoverButtons = document.querySelectorAll('.hover');

hoverButtons.forEach(button => {
    const popup = button.nextElementSibling;

    button.addEventListener('mouseover', () => {
        popup.style.visibility = 'visible';
    });

    button.addEventListener('mouseout', () => {
        popup.style.visibility = 'hidden';
    });
});


const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", InitializeSlider);

function InitializeSlider() {
    slides[slideIndex].classList.add("displaySlide");
    intervalId = setInterval(NextSlide, 5000)
}

function ShowSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");
}

function PrevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    ShowSlide(slideIndex);
}

function NextSlide() {
    slideIndex++;
    ShowSlide(slideIndex);
}