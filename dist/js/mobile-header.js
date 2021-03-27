const menu = document.querySelector(".ham-menu");
const nav = document.querySelector(".mobile-nav");
const dashes = document.querySelectorAll(".dash");
const header = document.querySelector("#header__content");

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
	nav.style.opacity = `.9`;
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
