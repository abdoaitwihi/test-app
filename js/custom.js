$(document).ready(function () {
	function animateShapes() {
		$(".menu-item img.right").addClass("right-text-is-hidden");
		$(".menu-item img.left").addClass("left-text-is-hidden");
		$(".menu-item img.right").removeClass("right-text-is-hidden-removed");
		$(".menu-item img.left").removeClass("left-text-is-hidden-removed");
	}
	function unAnimateShapes() {
		$(".menu-item img.right").addClass("right-text-is-hidden-removed");
		$(".menu-item img.left").addClass("left-text-is-hidden-removed");
		$(".menu-item img.right").removeClass("right-text-is-hidden");
		$(".menu-item img.left").removeClass("left-text-is-hidden");
	}
	function animatTexts() {
		$(".menu-label.left").removeClass("hidden-left");
		$(".menu-label.right").removeClass("hidden-right");
	}
	function unAnimateTexts() {
		$(".menu-label.left").addClass("hidden-left");
		$(".menu-label.right").addClass("hidden-right");
	}
	function animateAll() {
		animateShapes();
		animatTexts();
	}
	function unAnimateAll() {
		unAnimateShapes();
		unAnimateTexts();
	}
	function animateLogo() {
		$(".conpany-image").addClass("animateLogo");
		$(".conpany-image").removeClass("unAnimateLogo");
	}
	function unAnimateLogo() {
		$(".conpany-image").removeClass("animateLogo");
		$(".conpany-image").addClass("unAnimateLogo");
	}
	$(".main-menu  , .menu-item-link").hover(
		function () {
			// over
			animateLogo();
			animateAll();
		},
		function () {
			// out
			unAnimateLogo();
			unAnimateAll();
		}
	);

	//handle menu items clicking
	// $(".menu-item").click(function (e) {
	// 	e.preventDefault();
	// 	let target = $(this).attr("data-toggle");
	// 	setNewActiveIndex(target);
	// 	menuItemClicked(target, this);
	// });

	// function setNewActiveIndex(target) {
	// 	activeIndex = menuItems.indexOf(target);
	// }

	// function menuItemClicked(target, item) {
	// 	$(".section").hide();
	// 	setTimeout(() => {
	// 		showTarget(target);
	// 	});
	// 	unAnimateShapes();
	// 	unAnimateTexts();

	// 	let menuLabel = $(`.menu-item[data-toggle=${target}] menu-label`);
	// 	$(".menu-item").removeClass("activeItemRight");
	// 	$(".menu-item").removeClass("activeItemLeft");
	// 	if (target == "home") {
	// 		return;
	// 	}
	// 	if ($(menuLabel).hasClass("right")) {
	// 		$(item).addClass("activeItemRight");
	// 	} else {
	// 		$(item).addClass("activeItemLeft");
	// 	}
	// }

	// function showTarget(target) {
	// 	$(`#${target}`).fadeIn(500);
	// }
});
