// $(window).resize(function() {
//     var size_width = $(window).width();
//     if (size_width < 1065) {
//         // // thu gọn tất cả dropdown
//         $('body,html').removeClass('layout-left');
//         // alert('màn hình nhỏ');

//     } else {
//         // thay đổi lại về class title mặc định
//         // $('.scroll_content').addClass('fix_layout');
//         // alert('màn hình lớn');
//         $('body,html').addClass('layout-left');
//     }
// });


function Project_Overplay_Modal() {


    $('body').append("<div class='bg_overlay_box_contact'></div>");
    $('.bg_overlay_box_contact').append("<i class='fa-solid fa-circle-xmark' style='opacity:0;'></i>");

}

function Project_modal_box_setting() {

    $('.show_box_setting').click(function() {


        $('.global_bg_overlay').addClass('show');
        $('.box-setting').addClass('show');



    });
    $('.global-icon-close-modal-box,.global_bg_overlay').click(function() {


        $('.global_bg_overlay').removeClass('show');
        $('.box-setting').removeClass('show');



    });

}

function Project_modal_box_posts_heart() {

    $('.show_box_heart').click(function() {


        $('.global_bg_overlay').addClass('show');
        $('.box-posts-heart').addClass('show');



    });
    $('.global-icon-close-modal-box,.global_bg_overlay').click(function() {


        $('.global_bg_overlay').removeClass('show');
        $('.box-posts-heart').removeClass('show');



    });

}

function Project_modal_box_contact() {


    // Show box contact
    $('.show_box_contact').click(function() {


        $('.translate_Class').addClass('translate-left animated');
        $('.box-contact').addClass('show');
        $('.bg_overlay_box_contact').addClass('show');


    });
    // End show box contact
    // Close box contact
    $('.project-icon-close-modal-box, .bg_overlay_box_contact ').click(function() {

        $('.translate_Class').addClass('translate-initial animated');
        $('.box-contact').removeClass('show');
        $('.box-contact').removeClass('show');
        $('.bg_overlay_box_contact').removeClass('show');

        var header = $('.translate_Class');

        setTimeout(function() {
            header.removeClass('translate-left animated');
        }, 900);
        var header_2 = $('.translate_Class');

        setTimeout(function() {
            header_2.removeClass('translate-initial animated');
        }, 900);
    });
    // End close box contact
}

// function Project_modal_box_contact() {

//     $('.show_box_contact').click(function() {


//         $('.global_bg_overlay').addClass('show');
//         $('.box-contact').addClass('show');



//     });
//     $('.global-icon-close-modal-box,.global_bg_overlay').click(function() {


//         $('.global_bg_overlay').removeClass('show');
//         $('.box-contact').removeClass('show');



//     });

// }