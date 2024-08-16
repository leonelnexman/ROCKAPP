document.querySelectorAll('.faq__item-top').forEach(itemTop => {
    itemTop.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const faqContent = faqItem.querySelector('.faq__item-content');

        const maxHeight = faqContent.scrollHeight + 'px';

        if (faqItem.classList.contains('visible')) {
            faqContent.style.maxHeight = null;
            faqItem.classList.remove('visible');
        } else {
            faqContent.style.maxHeight = maxHeight;
            faqItem.classList.add('visible');
        }
    });
});

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	loop: true,
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	spaceBetween: -0,
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 1,
		slideShadows: false
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	breakpoints: {
        300: {
            effect: "none",
            spaceBetween: 10,
			slidesPerView: "auto",
        },
        962: {
            effect: "coverflow",
			slidesPerView: 1,
        },
    }
});