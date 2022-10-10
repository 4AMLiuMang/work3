var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true,
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
})
mySwiper.el.onmouseover = function () {
    mySwiper.autoplay.stop();
},
    mySwiper.el.onmouseleave = function () {
        mySwiper.autoplay.start();
    }