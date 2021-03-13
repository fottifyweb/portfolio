import { navToggle } from "./mobile-header.js";
import { toggleIcon } from "./Utilities/toggleIcon.js";

const menu = document.querySelector(".ham-menu");
const ourServices = document.querySelector(".our-services-content");
const categoriesContent = document.querySelectorAll(".categories-content");
const questions = document.querySelectorAll(".question");
// export let element =

// Toggles Menu
menu.addEventListener("click", navToggle);

// Toggles Our-Services
ourServices.addEventListener("click", () => {
	const categories = document.querySelector(".categories");

	toggleIcon(ourServices, categories);
});

// Togggles the sub-categories in the mobile-nav
categoriesContent.forEach((el) => {
	el.addEventListener("click", (e) => {
		let target = e.target;
		if (e.target.tagName === "I") target = e.target.parentElement;
		const subCategories = target.nextElementSibling;

		toggleIcon(el, subCategories);
	});
});

// Toggles FAQ answers
questions.forEach((question) => {
	question.addEventListener("click", (e) => {
		let target = e.target;
		console.log(e.target);
		if (e.target.tagName === "I" || e.target.tagName === "H4") target = e.target.parentElement;
		const answer = target.nextElementSibling;

		toggleIcon(target, answer);
	});
});

// **********************************
// ISMAIL's SHIT
// **********************************

const category__item = document.querySelectorAll(".category__item");

category__item.forEach(function (e) {
	e.addEventListener("mouseenter", showCatList, {
		once: true
	});
});

function showCatList(e) {
	let service_list = e.target.nextElementSibling;
	let category = e.target.parentElement;
	service_list.classList.add("show");
	category.addEventListener(
		"mouseleave",
		(e) => {
			hideCatList(e, category);
		},
		{ once: true }
	);
}

function hideCatList(e, category) {
	category.children[0].addEventListener("mouseenter", showCatList, { once: true });
	category.children[1].classList.remove("show");
}
