jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 576) {
            $('.card-body').addClass("card-img-overlay");
        } else {
            $('.card-body').removeClass("card-img-overlay");
        };
    };
    $(window).resize(function(){
        alterClass();
    });
    //Fire it when the page first loads:
    alterClass();
});
