const graphicDesign = document.querySelector(".graphics-design");
const videoAnimation = document.querySelector(".video-animation");
const videoAnimationWorks = videoAnimation.querySelectorAll(".work-img");
const graphicDesignWorks = graphicDesign.querySelectorAll(".work");
const closeImagePreview = document.querySelector(".close-image-preview");
const imagePreview = document.querySelector(".image-video-preview");
const body = document.querySelector("body");
const img = imagePreview.querySelector("img");
const video = imagePreview.querySelector("iframe");

graphicDesignWorks.forEach((el) => {
	el.addEventListener("click", (e) => {
		img.src = e.target.src;
		img.style.display = `block`;
		openImageVideoPreview(e);
	});
});

videoAnimationWorks.forEach((work) => {
	work.addEventListener("click", (e) => {
		video.src = e.target.parentElement.dataset.url;
		console.log(video.src);
		video.style.display = `block`;

		openImageVideoPreview(e);
	});
});

function openImageVideoPreview(e) {
	const header = document.querySelector(".main-header");
	let headerHeight = parseFloat(window.getComputedStyle(header).getPropertyValue("height"));

	imagePreview.style.opacity = "1";
	imagePreview.style.left = `0`;
	imagePreview.style.top = `${headerHeight}px`;
	imagePreview.style.width = `${window.innerWidth}px`;
	imagePreview.style.height = `${window.innerHeight - headerHeight}px`;

	body.style.overflow = `hidden`;
}

closeImagePreview.addEventListener("click", () => {
	imagePreview.style.width = "20px";
	imagePreview.style.height = "20px";
	imagePreview.style.left = "-50px";
	video.src = "";
	setTimeout(() => {
		imagePreview.style.opacity = "0";
		img.style.display = `none`;
		video.style.display = `none`;
	}, 250);

	body.style.overflow = `visible`;
});
