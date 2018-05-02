(function($) {
    'use strict';

    jQuery(document).on('ready', function() {

        /* PRELOADER JS */

        $(window).on('load', function() {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });

        /*END PRELOADER JS*/

     });


})(jQuery);