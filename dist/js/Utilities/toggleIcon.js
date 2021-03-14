const categories = document.querySelector(".categories");

export function toggleIcon(header, content) {
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
