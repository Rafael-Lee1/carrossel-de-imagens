$(document).ready(function() {
    var currentSlide = 0;
    var slides = $(".slide");

    function showSlide(index) {
        slides.hide();
        slides.eq(index).show();
    }

    showSlide(currentSlide);

    $(".prev").click(function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    $(".next").click(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });
});
