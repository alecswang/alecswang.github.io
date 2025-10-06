// Enable CSS transitions only after the page has loaded to avoid initial animation flash
document.addEventListener('DOMContentLoaded', function () {
	document.body.classList.remove('css-transitions-only-after-page-load');
});

// Improve keyboard focus outline for accessibility
document.addEventListener('keyup', function (e) {
	if (e.key === 'Tab') {
		document.documentElement.classList.add('using-keyboard');
	}
});
