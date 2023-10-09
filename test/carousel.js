var multipleItemCarousel = document.querySelector("#carouselItem");

if (window.matchMedia("(min-width:576px)").matches) {

    var carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: true,
    });

    var carouselWidth = $(".carousel-inner")[0].scrollWidth;
    var cardWidth = $(".carousel-item").width();
    var scrollPosition = 0;
    $("#carouselItem .carousel-control-next").on("click", function () {
    if (scrollPosition < (carouselWidth - cardWidth)) { //check if you can go any further
        scrollPosition += cardWidth;  //update scroll position
        $("#carouselItem .carousel-inner").animate({ scrollLeft: scrollPosition },600); //scroll left
    }
    });
    $("#carouselItem .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
        scrollPosition -= cardWidth;
        $("#carouselItem .carousel-inner").animate({ scrollLeft: scrollPosition },600);
    }
    });
} else {
    $(multipleItemCarousel).addClass("slide");
}
