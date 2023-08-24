'use strict';

new TypeIt('.home__title--strong', { loop: true, speed: 80 }) //Dream Coder|
	.move(-11)
	.type('Amazing ') // Amazing |Dream Coder
	.pause(1000)
	.move(null, { to: 'END' }) // Amazing Dream Coder|
	.delete() // |
	.type('Front-end Developer')
	.pause(1000) // a Front-end Developer
	.move(-21)
	.type('a remarkable ')
	.pause(1000)
	.delete(13)
	.type('an outstanding ')
	.pause(1000)
	.move(null, { to: 'END' })
	.delete()
	.go();
