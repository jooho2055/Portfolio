'use strict';
// To make the color change of header when user scrolls down

const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	if (window.scrollY > headerHeight) {
		header.classList.add('header__primary__color');
	} else {
		header.classList.remove('header__primary__color');
	}
});

// To make change of home opacity when user scrolls

const homeContainer = document.querySelector('.home__container');
const homeHeight = homeContainer.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});

// To hide the arrow up button when the page is at the top

const arrow = document.querySelector('.arrow-up');

arrow.style.opacity = 0;
document.addEventListener('scroll', () => {
	if (window.scrollY > homeHeight / 2) {
		arrow.style.opacity = 1;
	} else {
		arrow.style.opacity = 0;
	}
});

// Nav-bar toggle button when it is clicked

const navbarMenu = document.querySelector('.header__menu');
const navbarToggle = document.querySelector('.header__toggle');

navbarToggle.addEventListener('click', () => {
	navbarMenu.classList.toggle('open');
});

// Nav-bar automatically colse one user click one of the menus

navbarMenu.addEventListener('click', () => {
	navbarMenu.classList.remove('open');
});
