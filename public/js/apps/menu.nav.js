;(function (win, $) {
    'use strict';

    // Open/Close menu
    var controlMenu = function () {
        $('.js_btn_menu').on('click', function() {
            $('#container').toggleClass('ct_blur');
            $('#nav').toggleClass('active');
        });
    }
    
    $(win).on('load', function () {
        controlMenu();
    });

})(window, window.jQuery);