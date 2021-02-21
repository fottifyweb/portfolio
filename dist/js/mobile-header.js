const menu = document.querySelector(".ham-menu");
const nav = document.querySelector(".mobile-nav");
const dashes = document.querySelectorAll(".dash");
const header = document.querySelector("#header__content");
const categories = document.querySelector(".categories");

export function navToggle() {
	let navOpen = menu.classList.contains("nav-open");

	if (!navOpen) {
		openNav();
		addCloseMenuBtn();
		menu.classList.remove("nav-close");
		menu.classList.add("nav-open");
	}

	if (navOpen) {
		closeNav();
		addOpenMenuBtn();
		menu.classList.add("nav-close");
		menu.classList.remove("nav-open");
	}
}

function openNav() {
	const headerHeight = header.scrollHeight;

	nav.style.height = `${window.innerHeight - headerHeight}.px`;
	nav.style.opacity = `1`;
	nav.style.left = `0`;
}

function closeNav() {
	nav.style.opacity = `0`;
	nav.style.left = `-100vw`;
}

function addCloseMenuBtn() {
	dashes[0].style.transform = "rotate(34deg)";
	dashes[1].style.display = "none";
	dashes[2].style.transform = "rotate(-34deg)";
}

function addOpenMenuBtn() {
	dashes[0].style.transform = "rotate(0deg)";
	dashes[1].style.display = "block";
	dashes[2].style.transform = "rotate(-0deg)";
}

export function toggleContent(header, content) {
	if (header.classList.contains("opened-icon")) {
		hideHiddenContent(content);
		header.classList.remove("opened-icon");
	} else {
		showHiddenContent(content);
		header.classList.add("opened-icon");
	}
}

function showHiddenContent(content) {
	if (content.classList.contains("sub-categories")) {
		categories.style.height = `${categories.scrollHeight + content.scrollHeight}px`;
	}

	content.style.height = `${content.scrollHeight}px`;
}

function hideHiddenContent(content) {
	if (content.classList.contains("sub-categories")) {
		categories.style.height = `${categories.scrollHeight - content.scrollHeight}px`;
	}

	content.style.height = `0px`;
}
