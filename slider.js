// Globale variabler
// DOM elementer

const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll(".dot")

let slideIndex = 1

//intial function call on page load
showSlides(slideIndex)

window.setInterval(function(){
    showSlides(slideIndex += 1)
}, 8000)

// functions
// clickhandler for prev & next
function plusSlides(num) {
    showSlides(slideIndex += num)
}

// click handler for dots
function currentSlider(num) {
    showSlides(slideIndex = num)
}


// main function
function showSlides(num){
    if (num > slides.length) {
        slideIndex = 1
    }
    if (num < 1) {
        slideIndex = slides.length
    }
    

    slides.forEach(function(element){
        element.style.display = "none"
    })

    dots.forEach(function(element){
        element.classList.remove("active")
    })

    slides[slideIndex-1].style.display = "block"
    dots[slideIndex-1].classList.add("active")
}
