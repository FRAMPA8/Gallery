/*zakladni promenne*/
const containerSlider = document.querySelector(".container-slider")
const slideLeft = document.querySelector(".slide-left")
const slideRight = document.querySelector(".slide-right")

const arrowUp = document.querySelector(".arrow-up")
const arrowDown = document.querySelector(".arrow-down")

const slidesLength = slideRight.querySelectorAll("div").length


let numberActiveSlide = 0
/*vypocet, zpetna uvozovka*/ 
slideLeft.style.top =  `-${(slidesLength-1)*100}vh`

arrowUp.addEventListener("click", function(){

changeSlide("up")


})
arrowDown.addEventListener("click", function(){
changeSlide("down")
})

function changeSlide(direction){

    /*clientHeight = aktualni vyska okna*/
const sliderHeight = containerSlider.clientHeight
     
if (direction === "up"){
numberActiveSlide++
if (numberActiveSlide > slidesLength-1) {
    numberActiveSlide = 0
}
}
else if (direction ==="down"){

numberActiveSlide--
if (numberActiveSlide < 0) {
    numberActiveSlide = slidesLength-1
}
}

slideRight.style.transform = `translateY(-${numberActiveSlide*sliderHeight}px)`
slideLeft.style.transform = `translateY(${numberActiveSlide*sliderHeight}px)`
}