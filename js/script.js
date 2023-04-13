
// Comments Swiper ==================================================>
let commSwiper = new Swiper(".comments", {
    cssMode: true,
    loop: true,
    autoplay: true,
    spaceBetween: 10,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    mousewheel: true,
    keyboard: true,
    mausehold: true,
    drag: true,

    breakpoints: {
        560: {
            slidesPerView: 2,

        },
        1000: {
            slidesPerView: 3,

        },
    }


});
// Sponsors Swiper ==================================================>
let accSwiper = new Swiper(".sponsorsContainer", {
    cssMode: true,
    loop: true,
    autoplay: true,
    spaceBetween: 20,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    mousewheel: true,
    keyboard: true,
    mausehold: true,
    drag: true,

    breakpoints: {
        560: {
            slidesPerView: 2,
        },
        769: {
            slidesPerView: 3,
            autoplay: 'false'
        },
    },

});


