$(document).ready(function () {
	setTimeout(() => {
		$(".main-menu").css("opacity", 1);
	}, 500);
	let activeItemIndex = 0;
	let items = [
		"home",
		"main-menu",
		"services",
		"gallery",
		"clients",
		"contact",
		"about-us",
	];
	function handleMenuItems(newIndex) {
		$(".menu-item").removeClass("active");
		$(".menu-item").removeClass("not-active");
		if (newIndex <= 1) {
			return;
		} else {
			$(`.menu-item`).addClass(`not-active`);
			$(`.menu-item-${newIndex}`).addClass(`active`);
			$(`.menu-item-${newIndex}`).removeClass(`not-active`);
		}
	}
	function showMenu() {
		$(".section").fadeOut(700);
		$("#home").show();
		activeItemIndex = 1;
		$(".menu-item").removeClass("active");
		$(".menu-item").removeClass("not-active");
	}
	function showHome() {
		$(".lang-switch-container").fadeOut();
		$(".menu-item").removeClass("active");
		$(".menu-item").addClass("not-active");
		$("#home").removeClass("not-active");
	}

	$(".menu-item").click(function (e) {
		if ($(this).hasClass("active")) {
			return showMenu();
		}
		e.preventDefault();
		let index = $(this).attr("index");
		let itemToShow = items[+index];
		let newIndex = items.indexOf(itemToShow);
		activeItemIndex = newIndex;
		console.log(itemToShow);
		showItem(itemToShow, newIndex);
	});
	function showItem(itemToShow, newIndex) {
		handleMenuItems(newIndex);
		$("#home").addClass("not-active");
		$(".lang-switch-container").fadeIn();

		if (itemToShow == "main-menu") {
			showMenu();
		}
		if (itemToShow == "home") {
			showHome();
		}
		$(".section").fadeOut(700);

		// $(".main-menu").fadeOut(700);
		$(`#${itemToShow}`).fadeIn();
	}
	$("#home").click(function (e) {
		e.preventDefault();
		showItem("main-menu", 1);
	});
	function handleSlide(action) {
		let newIndex = 0;
		if (action == "down") {
			if (activeItemIndex == items.length - 1) {
				return;
			}
			activeItemIndex++;
		} else {
			if (activeItemIndex == 0) {
				return;
			}
			activeItemIndex--;
		}
		newIndex = activeItemIndex;

		let itemToShow = items[newIndex];

		showItem(itemToShow, newIndex);
	}

	function slide_down() {
		handleSlide("down");
	}
	function slide_up() {
		handleSlide("up");
	}
	var ts;
	$(document).bind("touchstart", function (e) {
		ts = e.originalEvent.touches[0].clientY;
	});

	$(document).bind("touchend", function (e) {
		var te = e.originalEvent.changedTouches[0].clientY;
		if (ts > te + 125) {
			slide_down();
		} else if (ts < te - 125) {
			slide_up();
		}
	});

	/* slide of gallery */
	/* trigering the slick */
	$(".gallery-carousel").owlCarousel({
		stagePadding: 20,
		loop: true,
		margin: 10,
		nav: false,
		navSpeed: 1600,
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
});
