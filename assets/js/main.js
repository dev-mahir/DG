
// Accordion
$(document).ready(function () {
    var allPanels = $(".accordion > .inner").hide();
    $(".accordion > h2 > a").click(function () {
        $(this).slideDown(500);
        $(this).toggleClass("selected");
        $(this)
            .parent()
            .next()
            .slideToggle(function () {});
        return false;
    });
});


$('#testi-carousel').slick({
    dots: false,
    infinite: true,
    speed: 400,
    // slidesToShow: 2,
    // centerMode: true,
    variableWidth: true,
    autoplay: true,
    loop: true,   
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>" 
  });