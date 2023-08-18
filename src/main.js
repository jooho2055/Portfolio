const header = document.querySelector('.header');
let headerHeight = header.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
	if (window.scrollY > headerHeight) {
		header.classList.add('header__primary__color');
	} else {
		header.classList.remove('header__primary__color');
	}
});
