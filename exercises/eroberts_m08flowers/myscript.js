// JavaScript Document
"use strict";
$(document).ready( () => {
    /*The following interactions are based on scrolling*/
    $(window).scroll(function() {
        /*The keyword this looks at the 'current element'. We decide the current element with the following selectors.*/
        /*scrollTop looks at the position of the vertical scrollbar. If the position is above 100px run the next statements.*/
        if ($(this).scrollTop()> 100) {
            if (!$('.square').is('.run')) {
                $('.evanescere').fadeOut(1000);
                $('.square').animate({width: "100%"}, 1000).addClass('run');
            }
        }
        else { /*If the scroll bar is above 100px run these statements*/
            if ($('.square').is('.run')) {
                $('.evanescere').fadeIn(1000);
                $('.square').animate({width: "0px"}, 1000).removeClass('run');
            }
        }

        if ($(this).scrollTop()> 200) {
            $('.content').fadeIn({queue: false, duration: 500}).animate({top: "0px"}, 1000);
        }
    }); /*END Scroll*/
    // $('#peeka').mouseenter(()=>{
    //     $('#peeka').animate({right: "90px"}, 500);        
    // });
    // $('#peeka').mouseleave(() => {
    //     $('#peeka').animate({right: "0"}, 500);
    // });
    $('#peeka').click(() => {
        if ($('#peeka').hasClass('open')) {
            $('#peeka').animate({right: "0px"}, 500).removeClass('open');
            $('#peeka').html(`&lt;-- &copy; E Roberts`)
        } else {
            $('#peeka').animate({right: "90px"}, 500).addClass('open');
            $('#peeka').html(`&copy; E Roberts --&gt;`);
        }
    });
});