{/* <script src="//code.tidio.co/dkziaxsfvsmeiir6n8oclpkt3il5cexj.js" async></script> */}



import { navToggle, toggleContent } from "./mobile-header.js";

const menu = document.querySelector(".ham-menu");
const ourServices = document.querySelector(".our-services-content");
const categoriesContent = document.querySelectorAll(".categories-content");

menu.addEventListener("click", navToggle);

ourServices.addEventListener("click", () => {
	const categories = document.querySelector(".categories");

	toggleContent(ourServices, categories);
});

categoriesContent.forEach((el) => {
	el.addEventListener("click", (e) => {
		let target = e.target;
		if (e.target.tagName === "I") target = e.target.parentElement;
		const subCategories = target.nextElementSibling;

		toggleContent(el, subCategories);
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

// *********** FAQ SECTION **************** //

let reveal_sign = document.querySelectorAll(".reveal-sign");

function revealAnswer(e) {
	let answer = e.target.parentElement.nextElementSibling;
	console.log(e.innerHTML);
	answer.classList.toggle("reveal");
	if (answer.classList.contains("reveal")) {
		e.innerHTML = "-";
	} else {
		e.innerHTML = "+";
	}
}

reveal_sign.forEach(function (e) {
	console.log(e);
	e.addEventListener("click", revealAnswer);
});
