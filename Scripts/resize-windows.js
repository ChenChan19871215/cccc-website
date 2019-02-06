jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 576) {
            $('#mid-card-content-1').addClass("card-img-overlay");
            $('#mid-card-content-2').addClass("card-img-overlay");
            $('#mid-card-content-3').addClass("card-img-overlay");
        } else {
            $('#mid-card-content-1').removeClass("card-img-overlay");
            $('#mid-card-content-2').removeClass("card-img-overlay");
            $('#mid-card-content-3').removeClass("card-img-overlay");
        };
    };
    $(window).resize(function(){
        alterClass();
    });
    alterClass();
});
