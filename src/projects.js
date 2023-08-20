'use strict';

// project filtering

const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project'); // array
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
	const filter = event.target.dataset.category;
	if (filter == null) {
		return;
	}

	handleActiveSelection(event.target);
	filterProjects(filter);
});

// reset active class
function handleActiveSelection(target) {
	const currentActive = document.querySelector('.category--selected');
	currentActive.classList.remove('category--selected');
	target.classList.add('category--selected');
}

// project filtering
function filterProjects(filter) {
	projects.forEach((project) => {
		if (filter === 'all' || filter === project.dataset.type) {
			project.style.display = 'block';
		} else {
			project.style.display = 'none';
		}
	});

	projectsContainer.classList.add('anim-out');

	setTimeout(() => {
		projectsContainer.classList.remove('anim-out');
	}, 250);
}
