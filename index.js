// accordion toggle

$(document).ready(function() {
    $(".accordion-toggle").click(function(){
        $(this).next(".answer").toggle();
    })
})

// flickity

$(document).ready(function(){
    $('.main-carousel').flickity({
        prevNextButtons: false
    });
    $('.recommendations-carousel').flickity({
        contain: true,
        pageDots: false
    });
})
