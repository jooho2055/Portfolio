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
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	homeContainer.style.opacity = 1 - window.scrollY / homeHeight;
});
