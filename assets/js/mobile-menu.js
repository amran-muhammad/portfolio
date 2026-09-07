'use strict';

//Open mobile menu
function setMobileMenu(open) {
    $('.mobile-menu').removeClass('active open').toggleClass('is-open', open).attr('aria-hidden', open ? 'false' : 'true');
    $('.menu__mobile-button').attr('aria-expanded', open ? 'true' : 'false');
    $('body').toggleClass('menu-open', open);
}

$('.menu__mobile-button').on('click', function () {
    setMobileMenu(!$('.mobile-menu').hasClass('is-open'));
});

$('.mobile-menu__close').on('click', function () {
    setMobileMenu(false);
});

//Close mobile menu after click
$('.mobile-menu__wrapper ul li a').on('click', function (event) {
    var target = $(this).attr('href');

    setMobileMenu(false);

    if (target && target.indexOf('#') === 0 && $(target).length) {
        event.preventDefault();
        setTimeout(function () {
            window.scrollTo({
                top: $(target).offset().top - $('.menu').outerHeight() - 16,
                behavior: 'smooth'
            });
        }, 0);
    }
});

$(document).on('keyup', function (event) {
    if (event.key === 'Escape') {
        setMobileMenu(false);
    }
});