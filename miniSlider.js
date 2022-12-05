//Globale variabler
//DOM elementer
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".karakterdot")

let slideIndex = 1

//Initial function call on pageload
showSlides(slideIndex)




//Functions

//click handler for prev & next
function plusSlides(num){
    showSlides(slideIndex += num)
}

//click handler for dots
function currentSlide(num){
    showSlides(slideIndex = num)
}

//Main function

function showSlides(num){
    if (num > slides.length){
        slideIndex = 1
    }
    if (num < 1){
        slideIndex = slides.length
    }

    slides.forEach(function(element){
        element.style.display = "none"
    })

    dots.forEach(function(element){
        element.classList.remove("active")
    })

    slides[slideIndex - 1].style.display = "block"
    dots[slideIndex - 1].classList.add("active")
}