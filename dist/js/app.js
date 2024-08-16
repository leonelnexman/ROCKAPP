let splash_1 = document.getElementById('splash_1');
let gold_splash_1 = document.getElementById('gold_splash_1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    splash_1.style.left = value * -0.5 + 'px';
    gold_splash_1.style.right = value * -0.5 + 'px';
    // text.style.marginTop = value * -0.5 + 'px';
});

document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.footer .nav-links');
    const body = document.body;

    // Переключение класса 'visible' у nav-links
    navLinks.classList.toggle('visible');

    // Переключение класса 'overflow-hidden' у body
    body.classList.toggle('overflow-hidden');
});


var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

var swiper1 = new Swiper('.cases__slider', {
    slidesPerView: "auto",
    spaceBetween: -150,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

