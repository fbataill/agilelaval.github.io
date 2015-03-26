//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function () {
    $("#cfpButton").bind('click', function(event) {
        $(this).attr("disabled", true).html("Ouverture imminente !");
        return false;
    });
});
$(function () {
    jQuery('#flipcountdownbox').flipcountdown({  
        size:'md',
        beforeDateTime:'06/29/2015 00:00:01'
    });
});
