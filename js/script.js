jQuery(document).ready(function($){    
    $('.scroll_up').click(function() {
        $("html, body").animate({scrollTop:0}, 500);
    });
    $(window).scroll(function() {
        if ($(this).scrollTop()>200) {
            $('.scroll_up').css('top', '85%');
        }
        else {
            $('.scroll_up').css('top', '110%');
        }
    });
});