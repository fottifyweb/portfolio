// Image Slider

export const SLIDER_DURATION = 5000;

export function startSlider() {
	try {
		const currentImg = document.querySelector("#intro__pic").children[0];
		const nextImg = document.querySelector("#intro__pic").children[1];

		moveRight(currentImg, nextImg);
	} catch (error) {
		return false;
	}
}

function moveRight(currentImg, nextImg) {
	currentImg.classList?.remove("right-center");
	currentImg.classList.add("center-left");
	nextImg.classList?.remove("center-left");
	nextImg.classList.add("right-center");

	setTimeout(() => {
		showNextImg();
	}, SLIDER_DURATION);
}

function showNextImg() {
	const currentImg = document.querySelector(".right-center");
	const nextImg = currentImg.nextElementSibling || currentImg.parentElement.children[0];

	moveRight(currentImg, nextImg);
}
