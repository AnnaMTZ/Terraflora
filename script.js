// MENU ANIMATION
const tillFold = document.querySelector('.photo');
const intElemClientHeight = tillFold.clientHeight;
var intElemScrollTop = tillFold.scrollTop;
console.log(intElemScrollTop);

// function onScroll() {
// 	if (intElemClientHeight > '1000px') {
// 		console.log('smth');
// 	}
// }

window.addEventListener('scroll', () => {
	// console.log(
	// 	// document.documentElement.scrollHeight,
	// 	document.documentElement.scrollTop,
	// 	document.documentElement.clientHeight // does not include margins and borders
	// );
	if (
		document.documentElement.scrollTop > document.documentElement.clientHeight
	) {
		console.log('scroll');
	}
});

// SOCIAL SECTION
// To display "read more" text on social approval
// Approval 1
const hiddenText1 = document.getElementById('readMore1');
const hideShowBtn1 = document.getElementById('readMoreBtn1');
const more1 = document.getElementById('more1');
const hideButton1 = document.getElementById('hideText1');

hideShowBtn1.addEventListener('click', function () {
	hiddenText1.classList.add('readAllText');
	hideButton1.style.display = 'inline-block';
	hideShowBtn1.style.display = 'none';
	more1.style.display = 'none';
});

hideButton1.addEventListener('click', function () {
	hiddenText1.classList.remove('readAllText');
	hideButton1.style.display = 'none';
	hideShowBtn1.style.display = 'inline-block';
	more1.style.display = 'inline';
});

// Approval 2
const hiddenText2 = document.getElementById('readMore2');
const hideShowBtn2 = document.getElementById('readMoreBtn2');
const more2 = document.getElementById('more2');
const hideButton2 = document.getElementById('hideText2');

hideShowBtn2.addEventListener('click', function () {
	hiddenText2.classList.add('readAllText');
	hideButton2.style.display = 'inline-block';
	hideShowBtn2.style.display = 'none';
	more2.style.display = 'none';
});

hideButton2.addEventListener('click', function () {
	hiddenText2.classList.remove('readAllText');
	hideButton2.style.display = 'none';
	hideShowBtn2.style.display = 'inline-block';
	more2.style.display = 'inline';
});
