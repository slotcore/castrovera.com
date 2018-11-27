/*---------------------------------
    OCULTAR Y MOSTRAR BOTON IR ARRIBA
 ----------------------------------*/
$(function () {
    $(window).scroll(function () {
        var scrolltop = $(this).scrollTop();
        if (scrolltop >= 50) {
            $(".ir-arriba").fadeIn();
        } else {
            $(".ir-arriba").fadeOut();
        }
    });

});


/*----------------------------------
Iniciamos smoothScroll
--------------------------------*/
smoothScroll.init({
    speed: 1000, // Integer. How fast to complete the scroll in milliseconds
    offset: 60, // Integer. How far to offset the scrolling anchor location in pixels

});


/*----------------------------------
Iniciamos WOW
--------------------------------*/
var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
});
wow.init();


/*---------------------------------
   CABECERA ANIMADA
 ----------------------------------*/
$(window).scroll(function () {
    // grosor de menu
    var nav = $('#menu');
    var bar = $('#bar-contact');

    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        nav.addClass("cabecera-scroll");
        bar.addClass("panel-pub-hidden");
    } else {
        nav.removeClass("cabecera-scroll");
        bar.removeClass("panel-pub-hidden");
    }

    /*---------------------------------
       ACTIVACION DE MENU
     ----------------------------------*/
    var offset = 80;
    var position_inicio_ini = $('#inicio').position().top - offset;
    var position_inicio_fin = $('#inicio').position().top + $('#inicio').height();

    if (scroll > position_inicio_ini && scroll <= position_inicio_fin) {
        if ($('#menu-inicio').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-inicio').addClass("active");
        }
    }

    var position_nosotros_ini = $('#nosotros').position().top - offset;
    var position_nosotros_fin = $('#nosotros').position().top + $('#nosotros').height();

    if (scroll > position_nosotros_ini && scroll <= position_nosotros_fin) {
        if ($('#menu-nosotros').hasClass("active") == false) {
            console.log(scroll);
            console.log(position_nosotros_ini);
            $(".nav-item").removeClass("active");
            $('#menu-nosotros').addClass("active");
        }
    }

    var position_servicios_ini = $('#servicios').position().top - offset;
    var position_servicios_fin = $('#servicios').position().top + $('#servicios').height();

    if (scroll > position_servicios_ini && scroll <= position_servicios_fin) {
        if ($('#menu-servicios').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-servicios').addClass("active");
        }
    }

    var position_contacto_ini = $('#contacto').position().top - offset;
    var position_contacto_fin = $('#contacto').position().top + $('#contacto').height();

    if (scroll > position_contacto_ini && scroll <= position_contacto_fin) {
        if ($('#menu-contacto').hasClass("active") == false) {
            $(".nav-item").removeClass("active");
            $('#menu-contacto').addClass("active");
        }
    }
});
