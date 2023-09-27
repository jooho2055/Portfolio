'use strict';

const sectionIds = ['#home', '#about', '#skills', '#work', '#contact'];
const sections = sectionIds.map((id) => document.querySelector(id));
const navItems = sectionIds.map((id) => document.querySelector(`[href="${id}"]`));
const visibleSections = sectionIds.map(() => false);
let activeNavItem = navItems[0];

const options = {
	rootMargin: '-25% 0px 0px 0px',
	threshold: [0, 0.98], // call callback function at starting point and 0.98(almost end) point
};

const observer = new IntersectionObserver(observerCallback, options);

sections.forEach((section) => observer.observe(section));

function observerCallback(entries) {
	let selectLastOne; // this variable is for selecting contact section

	entries.forEach((entry) => {
		const index = sectionIds.indexOf(`#${entry.target.id}`);
		visibleSections[index] = entry.isIntersecting;

		// console.log(entry.intersectionRatio);

		// for contact section
		selectLastOne =
			index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.95;
	});

	const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);

	// console.log(sectionIds[navIndex]);
	const navItem = navItems[navIndex];
	activeNavItem.classList.remove('active');
	activeNavItem = navItem;
	activeNavItem.classList.add('active');
}

function findFirstIntersecting(intersections) {
	const index = intersections.indexOf(true);
	return index >= 0 ? index : 0;
}
