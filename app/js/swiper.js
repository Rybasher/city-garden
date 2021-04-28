import { Swiper, Navigation } from "swiper";

Swiper.use([Navigation]);

const swiper_one = new Swiper(".swiper-container-one", {
	direction: 'horizontal',
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
			slidesPerGroup: 1
		},
		570: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			spaceBetween: 40

		},
		992: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 40
		}

	}
})