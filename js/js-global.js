function Global_Overplay_Modal() {
    $('body').append("<div class='global_bg_overlay'></div>");
    $('.global_bg_overlay').append("<i class='fa-solid fa-circle-xmark' style='opacity:0;'></i>");


}

function Global_show_menu_small() {
    $('.menu-small-icon').click(function() {
        $('.box-link').toggleClass('show-menu-small');

    });
}

function Global_Loading() {
    $(window).on('load', function() {
        $('.load').delay(1000).fadeOut('slow');
    });
}