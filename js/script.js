const menuItems = document.querySelectorAll('nav .menu a[href^="#"]');

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
})

function getScrollToByHref(element){
	const id = element.getAttribute('href');
	return document.querySelector(id).OffsetTop;
}

function scrollToIdOnClick(event){
	event.preventDefault();
	const to = getScrollToByHref(event.target) - 80; 

	scrollToPosition(to);
}

function scrollToPosition(to){
	window.scroll({
		top: to,
		behavior: "smooth",
	});
}