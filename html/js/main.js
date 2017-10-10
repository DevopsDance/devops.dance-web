(function() {
    'use strict';

    Pace.on("done", function() {
        console.log("finishing loading the page");
    });

    // Avoid `console` errors in browsers that lack a console.
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any code in here.
$(function() {
    'use strict';

    /**
     * STICKY MENU
     **/
    var $navbar = $(".navigation"),
        stickyPoint = 90;

    function navbarSticky() {
        if ($(window).scrollTop() >= stickyPoint) {
            $navbar.addClass("navbar-sticky");
        } else {
            $navbar.removeClass("navbar-sticky");
        }
    }

    $(window).scroll(function () {
        navbarSticky();
    });

    navbarSticky();

    /**
     *  NAVBAR SIDE COLLAPSIBLE
     **/
    $(".navbar-toggler").on("click", function() {
        $navbar.toggleClass("navbar-expanded");
    });

   /**
    * AOS Initialization
    **/
    AOS.init({
        offset: 200,
        duration: 1500,
        disable: "mobile"
    });

    /**
     * Swiper Initialization
     **/
    $('.swiper-container').each(function() {
        var $this = $(this);

        var autoplay = $this.data('swiper-autoplay') || 3000;
        var speed = $this.data('swiper-speed') || 1100;

        var options = {
            pagination: $('.swiper-pagination', this),
            nextButton: $('.swiper-button-next', this),
            prevButton: $('.swiper-button-prev', this)
        };

        var swiper = new Swiper (this, $.extend({
            loop: true,
            autoplay: autoplay,
            speed: speed,
            paginationClickable: true,
            autoplayDisableOnInteraction: false
        }, options));
    });

    /**
     * Values Slider on Pricing Plans
     **/
    $('.pricing [data-toggle="slider"]').each(function() {
        var $element = $(this);
        var currentValue = $element.data("slider-value");

        //TODO: data-rel, if exists take it
        var $price = $('.price', $element.parent().siblings('.pricing-value'));
        var $value = $('.value', $element.prev()).text(currentValue);

        function calculatePrice (val) {
            // Implement your own price calculation function here
            return (val * 9.99).toFixed(2);
        }

        function renderValues(newValue) {
            var price = calculatePrice(newValue);

            $price.text(price);
            $value.text(newValue);
        }

        $element.slider();
        $element.on('change', function(data) {
            renderValues(data.value.newValue);
        });

        renderValues(currentValue);
    });

    /**
     * Popover
     **/
    $('[data-toggle="popover"]').popover();
});
