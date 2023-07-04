// Tooltip //
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
     return new bootstrap.Tooltip(tooltipTriggerEl)
})

// play | pause Carousel //
var mycarousel = document.querySelector('#mycarousel');
var carouselButton = document.getElementById("carouselButton");
var carousel = new bootstrap.Carousel(mycarousel, {
    interval: 1000
});
carouselButton.addEventListener("click", function () {
    if(carouselButton.firstElementChild.classList.contains("fa-pause")){
        carouselButton.firstElementChild.classList.remove("fa-pause");
        carouselButton.firstElementChild.classList.add("fa-play");
        carousel.pause();
    }
    else if(carouselButton.firstElementChild.classList.contains("fa-play")){
        carouselButton.firstElementChild.classList.remove("fa-play");
        carouselButton.firstElementChild.classList.add("fa-pause");
        carousel.cycle();
    }
});


