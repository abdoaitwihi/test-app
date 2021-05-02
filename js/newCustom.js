$(document).ready(function () {
	var windowsize = $(window).width();
	let isMobile = windowsize < 992 ? true : false;

	function addStateOne() {
		for (let index = 1; index < 7; index++) {
			$(`.menu-item-${index}`).addClass(`animated-state-${index}`);
		}
	}
	function removeStateOne() {
		for (let index = 1; index < 7; index++) {
			$(`.menu-item-${index}`).removeClass(`animated-state-${index}`);
		}
	}
	function showTarget(target) {
		$(`#${target}`).fadeIn(500);
	}
	function removeActiveStateFromAll() {
		for (let index = 1; index < 7; index++) {
			$(`.menu-item-${index}`).removeClass(`active-state-${index}`);
		}
	}
	function removeAnimatedStateFromAll() {
		for (let index = 1; index < 7; index++) {
			$(`.menu-item-${index}`).removeClass(`animated-state-${index}`);
		}
	}
	function animateIcon(target) {
		console.log(target);
		$(".mobile-icon").removeClass("final-position");
		$(`#${target} .mobile-icon`).addClass("final-position");
	}
	function setNewActiveIndex(target) {
		activeIndex = menuItems.indexOf(target);
	}
	function activateItem(index, target) {
		if (target == "home") {
			$(".company-holder").removeClass("inactive");
			$(".lang-switch-container").css("opacity", 0);
		}
		setNewActiveIndex(target);

		$(".section").hide();
		if (isMobile) {
			$(".section").hide();
			animateIcon(target);
			$(".main-menu").hide();
			$("#home").show();
		}
		removeActiveStateFromAll();
		removeAnimatedStateFromAll();
		$(`.menu-item-${index}`).addClass(`active-state-${index}`);
		setTimeout(() => {
			showTarget(target);
		});
	}
	$(".main-menu , .menu-item").hover(
		function () {
			// over
			addStateOne();
		},
		function () {
			// out
			removeStateOne();
		}
	);

	$(".menu-item").click(function (e) {
		e.preventDefault();
		let index = $(this).attr("index");
		let target = $(this).attr("data-toggle");

		activateItem(index, target);
	});

	$(".menu-item-link").click(function (e) {
		e.preventDefault();
	});

	let owlStagePdadding = 0;
	if (isMobile) {
		owlStagePdadding = 20;
	} else {
		owlStagePdadding = 50;
	}
	/* trigering the slick */
	$(".gallery-carousel").owlCarousel({
		stagePadding: owlStagePdadding,
		loop: true,
		margin: 10,
		nav: true,
		navSpeed: 1000,
		navText: ["<", ">"],
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: true,
	});
	/* ==================scroll handling=============================== */

	let activeIndex = 0;
	let menuItems = [
		"home",
		"services",
		"gallery",
		"clients",
		"contact",
		"about-us",
	];
	if (isMobile) {
		menuItems = [
			"home",
			"menu",
			"services",
			"gallery",
			"clients",
			"contact",
			"about-us",
		];
	}
	if (!isMobile) {
		$(".main-menu").show();
	}

	function handleMenu(target) {
		$(".section").hide();
		$("#home").show();
		$(".company-holder").addClass("inactive");
		$(".lang-switch-container").css("opacity", 1);
		removeActiveStateFromAll();
		removeAnimatedStateFromAll();
		// $(`.menu-item-${index}`).addClass(`active-state-${index}`);
		setTimeout(() => {
			$(".main-menu").fadeIn();
		});
	}
	let allowScroll = true;
	var lastScrollTop = 0;

	// $(document.body).on("touchmove", onScroll);
	// function onScroll() {
	// 	if (!allowScroll) return;
	// 	var st = $(this).scrollTop();
	// 	if (st > lastScrollTop) {
	// 		// downscroll code
	// 		if (activeIndex <= menuItems.length - 1 && activeIndex > 0) {
	// 			activeIndex--;
	// 			let index = activeIndex + 1;
	// 			let target = menuItems[activeIndex];
	// 			console.log(target);
	// 			if (target == "menu") {
	// 				return handleMenu(target);
	// 			}
	// 			activateItem(index, target);
	// 		}
	// 	} else {
	// 		// upscroll code
	// 		if (activeIndex < menuItems.length - 1 && activeIndex >= 0) {
	// 			activeIndex++;
	// 			let index = activeIndex + 1;
	// 			let target = menuItems[activeIndex];
	// 			if (target == "menu") {
	// 				return handleMenu(target);
	// 			}
	// 			activateItem(index, target);
	// 		}
	// 	}
	// 	lastScrollTop = st;
	// 	allowScroll = false;
	// 	setTimeout(() => {
	// 		allowScroll = true;
	// 	}, 600);
	// }
	$("body").scroll(function () {
		console.log("hi");
	});

	/* -========another solution */

	var ts;
	$(document).bind("touchstart", function (e) {
		ts = e.originalEvent.touches[0].clientY;
	});

	$(document).bind("touchend", function (e) {
		var te = e.originalEvent.changedTouches[0].clientY;
		if (ts > te + 25) {
			slide_down();
		} else if (ts < te - 25) {
			slide_up();
		}
	});
	function slide_down() {
		if (activeIndex < menuItems.length - 1 && activeIndex >= 0) {
			activeIndex++;
			let index = activeIndex + 1;
			let target = menuItems[activeIndex];
			if (target == "menu") {
				return handleMenu(target);
			}
			activateItem(index, target);
		}
	}
	function slide_up() {
		if (activeIndex <= menuItems.length - 1 && activeIndex > 0) {
			activeIndex--;
			let index = activeIndex + 1;
			let target = menuItems[activeIndex];
			console.log(target);
			if (target == "menu") {
				return handleMenu(target);
			}
			activateItem(index, target);
		}
	}

	$("body").bind("mousewheel", function (e) {
		if (!allowScroll) return;
		if (e.originalEvent.wheelDelta > 10) {
			if (activeIndex <= menuItems.length - 1 && activeIndex > 0) {
				activeIndex--;
				let index = activeIndex + 1;
				let target = menuItems[activeIndex];
				console.log(target);
				if (target == "menu") {
					return handleMenu(target);
				}
				activateItem(index, target);
			}
		} else if (e.originalEvent.wheelDelta < -10) {
			if (activeIndex < menuItems.length - 1 && activeIndex >= 0) {
				activeIndex++;
				let index = activeIndex + 1;
				let target = menuItems[activeIndex];
				if (target == "menu") {
					return handleMenu(target);
				}
				activateItem(index, target);
			}
		}
		allowScroll = false;
		setTimeout(() => {
			allowScroll = true;
		}, 600);
	});

	/* show menu on mobile when clicking on the icon at the top */
	$(".company-holder").click(function (e) {
		e.preventDefault();
		handleMenu("menu");
	});

	$(".discor-link").click(function (e) {
		e.preventDefault();
	});
	/* ============form submition */
	$(".submit-btn").click(function (e) {
		e.preventDefault();
		$(".error-message").hide();
		if ($("#message").val() && $("#email").val() && $("#email").val()) {
			$(".error-message").slideUp();
			$(".thanks-message").slideDown();
			$("form").css("opacity", "0");
		} else {
			$(".error-message").slideDown();
		}
	});
	/* ============end of form submition */

	// $(window).scroll(function () {
	// 	atBottom("body");
	// 	var div = $(this);
	// 	if (div.height() == div.scrollTop() + 1) {
	// 		//scrollTop is 0 based
	// 		alert("Reached the bottom!");
	// 	}
	// });
	function atBottom(ele) {
		var sh = ele.scrollHeight;
		var st = ele.scrollTop;
		var ht = ele.offsetHeight;
		if (ht == 0) {
			console.log("hi");
			return true;
		}
		if (st == sh - ht) {
			console.log("hi 2");
			return true;
		} else {
			console.log("hi the");
			return false;
		}
	}
});
