(function ($, window, document, undefined) {
    'use strict';

    /* GLOBAL VARIABLES */
    //object for saving loaded posts from AJAX
    let pageWrapIdentification = $('content-area');
    let parentHeight = pageWrapIdentification.outerHeight();

    /* COUNTER */
    const counter = (parentHeight) => {
        if ($('.js-counter').length) {
            $('.js-counter').not('.is-complete').each(function () {

                if (parentHeight > $(this).offset().top - 30) {
                    $(this).countTo().addClass('is-complete');
                }
            });
        }
    };

    /* SKILLS */
    const skills = (parentO, parentHeight) => {
        if ($('.niko-sc__skills-list').length) {
            $('.niko-sc__skills-item').not('.active').each(function () {
                if (parentHeight > $(this).offset().top - 30) {
                    $(this).addClass('active');
                    $(this).each(function () {
                        let procent = $(this).attr('data-value');
                        $(this).find('.active-line').css('width', procent + '%').css('opacity', '1');
                        $(this).find('.counter').countTo();
                    }); // end each
                }
            }); // end each
        }
    };

    /* INITIALIZE FUNCTIONS ON WINDOW LOAD */
    $(window).on('load', function () {
        pageWrapIdentification.mCustomScrollbar({
            callbacks: {
                onInit: function() {
                    // counter(parentHeight);
                    skills(parentHeight);
                    // masonry();
                },
                whileScrolling : function() {
                    // counter(parentHeight);
                    skills(parentHeight);
                }
            }
        });
    });

    /* INITIALIZE FUNCTIONS ON WINDOW RESIZE */
    $(window).on('resize', function () {
        setFullHeightToPage();
        
    });


})(jQuery, window, document);