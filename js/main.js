(function($) {
    "use strict";
    jQuery(document).ready(function($) {

        // scroll up and fixed the header bottom in top position
        $(window).bind('scroll', function() {
            var navHeight = $(".header-support").height();
            ($(window).scrollTop() > navHeight) ? $('.header-bottom').addClass('goToTop'): $('.header-bottom').removeClass('goToTop');
        });

        // close the header banner
        jQuery(".header-offer_banner-close").click(function(){
            jQuery(".header-offer").addClass("close-btn");
        });

        // initialize the carousel
        jQuery('.carousel').carousel({
            interval: 2000
        });

        // wow initialize
        new WOW().init();

        // scrollup back to top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollup').fadeIn("slow");
            } else {
                $('.scrollup').fadeOut("slow");
            }
        });
        $('.scrollup').click(function() {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        // review owl carousel
        $(".review-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            smartSpeed: 1200
        });

        // happy client logo owl carousel
        $(".logo-carousel").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            autoplay: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            smartSpeed: 1200
        });

        // site preloader
        $(window).on('load', function(){
            setTimeout(function(){
                $('#cover').fadeOut(400);
            },400)
        });

    });
}(jQuery));
(function($, window) {


})(window.jQuery, window);
