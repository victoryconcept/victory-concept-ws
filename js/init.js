/*
 * Copyright (c) Victory Concept
*/


jQuery(document).ready(function () {

	"use strict";

	// here all ready functions


	fotofly_fn_mainnav_w();
	fotofly_fn_contactsend();
	fotofly_fn_proofing();
	fotofly_fn_miniboxes();
	fotofly_fn_search();
	fotofly_fn_mMenuDisplay();
	fotofly_fn_hamburgermenu();
	fotofly_fn_abscoluting();
	fotofly_fn_vertmenu_notice();
	fotofly_fn_splitscreen_h();
	fotofly_fn_heroheader();
	fotofly_fn_heroheader_h();
	fotofly_fn_sticky_sidebar();
	fotofly_fn_magnific_popup();
	fotofly_fn_jarallax();
	fotofly_fl_isotope();
	fotofly_fn_vermenuopener();
	fotofly_fn_vermenuopener_W();
	fotofly_fl_vermenuscroll();
	fotofly_fn_versubmenu();
	fotofly_fn_horsubmenu();
	fotofly_fn_headerresponsive();
	fotofly_fn_mainslider_height();
	fotofly_fn_mainslider();
	fotofly_fn_imgtosvg();
	fotofly_fn_totop();


	jQuery(window).on('resize', function (e) {
		e.preventDefault();
		fotofly_fn_mainnav_w();
		fotofly_fn_abscoluting();
		fotofly_fn_heroheader_h();
		fotofly_fn_miniboxes();
		fotofly_fn_mMenuDisplay();
		fotofly_fn_horsubmenu();
		fotofly_fn_vermenuopener_W();
		fotofly_fn_splitscreen_h();
		fotofly_fl_isotope();
		fotofly_fl_vermenuscroll();
		fotofly_fn_headerresponsive();
		fotofly_fn_mainslider_height();
	});

	setTimeout(function () { fotofly_fl_isotope(); }, 500);
	setTimeout(function () { fotofly_fl_isotope(); }, 1500);
	setTimeout(function () { fotofly_fl_isotope(); }, 2500);
	setTimeout(function () { fotofly_fl_isotope(); }, 3500);
	setTimeout(function () { fotofly_fl_isotope(); }, 4500);

	jQuery(window).on('scroll', function (e) {
		e.preventDefault();
		fotofly_fn_totop_myhide();
	});

	jQuery(window).load(function (e) {
		e.preventDefault();
		fotofly_fl_isotope();
		fotofly_fn_mainslider();
	});

});
// -----------------------------------------------------
// ------------    MAIN NAVIGATION WIDTH    ------------
// -----------------------------------------------------
function fotofly_fn_mainnav_w() {
	"use strict";
	var nav = jQuery('.navigation');
	var navUl = nav.find('ul.nav__hor');
	var navW = nav.width();
	var helperW = nav.find('.header_helper').width();

	if (nav.length) { navUl.css({ width: navW - helperW }); }

}
// -----------------------------------------------------
// ------    CONTACT FORM FOR CONTACT PAGE   -----------
// -----------------------------------------------------
function fotofly_fn_contactsend() {
	"use strict";

	jQuery(".fotofly_fn_contactsendbtn").on('click', function () {

		var name = jQuery(".contact_form #name").val();
		var email = jQuery(".contact_form #email").val();
		var message = jQuery(".contact_form #message").val();
		var subject = jQuery(".contact_form #subject").val();
		var success = jQuery(".contact_form .returnmessage").data('success');

		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if (name === '' || email === '' || message === '') {
			//alert("Please Fill Required Fields"); 
			jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else {
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php", { xx_name: name, xx_email: email, xx_message: message, xx_subject: subject }, function (data) {

				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph


				if (jQuery(".contact_form .returnmessage span.contact_error").length) {
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);
				} else {
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>" + success + "</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}

				if (data === "") {
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}

			});
		}
		return false;

	});

}
// -----------------------------------------------------
// ---------------    PROOFING CHECK    ----------------
// -----------------------------------------------------
function fotofly_fn_proofing() {
	"use strict";
	var item = jQuery('.fotofly_fn_proofing .proofing_list li');

	item.each(function () {
		var element = jQuery(this);
		var div = element.children('.item');
		var btn1 = div.find('a.check');
		var btn2 = div.find('a.cancel');
		btn1.on('click', function () {
			div.addClass('checked');
			return false;
		});
		btn2.on('click', function () {
			div.removeClass('checked');
			return false;
		});
	});
}
// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------
function fotofly_fn_miniboxes() {
	"use strict";

	var el = jQuery('.fotofly_fn_miniboxes');

	if (el.length) {
		el.each(function (index, element) {

			var child = jQuery(element).children('.fotofly_fn_minibox');

			child.css({ height: 'auto' });
			// Get an array of all element heights

			var W = jQuery(window).width();
			if (W > 480) {
				var elementHeights = child.map(function () { return jQuery(this).outerHeight(); }).get();

				// Math.max takes a variable number of arguments
				// `apply` is equivalent to passing each height as an argument
				var maxHeight = Math.max.apply(null, elementHeights);

				// Set each height to the max height
				child.css({ height: maxHeight + 'px' });
			}
		});
	}
}
// -----------------------------------------------------
// -------------------   SEARCH    ---------------------
// -----------------------------------------------------
function fotofly_fn_search() {
	"use strict";
	var btn = jQuery('.header_helper ul li.search > a');
	var searchBox = jQuery('.fotofly_fn_search');

	btn.on('click', function () {
		if (searchBox.hasClass('opened')) {
			searchBox.removeClass('opened');
		} else {
			searchBox.addClass('opened');
		} return false;
	});
	jQuery(window).on('click', function () {
		searchBox.removeClass('opened');
	});

	searchBox.on('click', function (event) {
		event.stopPropagation();
	});
}
// -----------------------------------------------------
// ---------------   HAMBURGER MENU    -----------------
// -----------------------------------------------------
function fotofly_fn_mMenuDisplay() {
	"use strict";
	var W = jQuery(window).width();
	var ham = jQuery('.hamburger');
	var mobNav = jQuery('.fotofly_fn_mobilemenu_wrap');
	if (W > 1040) {
		mobNav.hide();
		ham.removeClass('is-active');
	}
}
// -----------------------------------------------------
// ---------------   HAMBURGER MENU    -----------------
// -----------------------------------------------------
function fotofly_fn_hamburgermenu() {
	"use strict";

	var hamburger = jQuery('.header_helper ul li .hamburger');
	var mobNav = jQuery('.fotofly_fn_mobilemenu_wrap');

	var header1 = jQuery('.fotofly_fn_header.absolute');
	var header2 = jQuery('.fotofly_fn_header__one.absolute');


	hamburger.on('click', function () {
		var element = jQuery(this);


		if (element.hasClass('is-active')) {
			element.removeClass('is-active');
			mobNav.slideUp(500);
		} else {
			element.addClass('is-active');
			mobNav.slideDown(500);
		} return false;
	});


	if (header1.length) {
		var h1 = header1.outerHeight();
		var $data1 = header1.data('theme');

		if ($data1 === 'transdark' || $data1 === 'nonedark') { mobNav.css({ backgroundColor: '#fff' }); }
		mobNav.css({ paddingTop: h1 });
	} else if (header2.length) {
		var h2 = header2.outerHeight();
		var $data2 = header2.data('theme');

		if ($data2 === 'transdark' || $data2 === 'nonedark') { mobNav.css({ backgroundColor: '#fff' }); }
		mobNav.css({ paddingTop: h2 });
	} else {
		mobNav.css({ paddingTop: '0px' });
	}
}
// -----------------------------------------------------
// --------------   ABSLOLUTE COULTING    --------------
// -----------------------------------------------------
function fotofly_fn_abscoluting() {
	"use strict";

	var header1 = jQuery('.fotofly_fn_header.absolute');
	var header2 = jQuery('.fotofly_fn_header__one.absolute');

	var contact = jQuery('.fotofly_fn_heroheader .fotofly_fn_contact .contact');
	var error = jQuery('.fotofly_fn_heroheader .fotofly_fn_errorpage .errorpage');

	if (header1.length) {
		var h1 = header1.outerHeight();
		contact.css({ paddingTop: h1, paddingBottom: h1 });
		error.css({ paddingTop: h1, paddingBottom: h1 });
	} else if (header2.length) {
		var h2 = header2.outerHeight();
		contact.css({ paddingTop: h2, paddingBottom: h2 });
		error.css({ paddingTop: h2, paddingBottom: h2 });
	}
}
// -----------------------------------------------------
// -------------   VERTICAL MENU NOTICE    -------------
// -----------------------------------------------------
function fotofly_fn_vertmenu_notice() {
	"use strict";
	var close = jQuery("#floatingmes");
	var block = jQuery(".fotofly_fn_vertmenu_left");

	block.on('mousemove', function (pos) {
		close.show();
		close.css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
	}).on('mouseleave', function () {
		close.hide();
	});
}
// -----------------------------------------------------
// -----------------   HERO HEADER    ------------------
// -----------------------------------------------------
function fotofly_fn_splitscreen_h() {
	"use strict";
	var H = jQuery(window).height();
	var W = jQuery(window).width();
	var navH = jQuery('.fotofly_fn_header').height();
	var splitLeft = jQuery('.fotofly_fn_page_splitleft');
	var splitRight = jQuery('.fotofly_fn_page_splitright');
	var split = jQuery('.fotofly_fn_page_splitscreen');
	splitLeft.css({ height: H - navH });
	splitRight.css({ height: H - navH });
	split.css({ minHeight: (H - navH) });

	if (W > 768) { splitRight.css({ height: H - navH }); } else { splitRight.css({ height: 'auto' }); }
}
// -----------------------------------------------------
// -----------------   HERO HEADER    ------------------
// -----------------------------------------------------
function fotofly_fn_heroheader() {
	"use strict";

	var hero = jQuery('.fotofly_fn_heroheader');

	hero.each(function () {
		var element = jQuery(this);

		var bgColor = element.data('bg-color');
		var bgOpacity = element.data('bg-opacity');
		var textColor = element.data('text-color');

		var content = element.find('.heroheader_content_wrap');
		var background = element.find('.heroheader_bg_wrap .overlay_color');

		background.css({ backgroundColor: bgColor, opacity: bgOpacity });

		content.css({ color: textColor });
		content.find('a').css({ color: textColor });

	});
}
function fotofly_fn_heroheader_h() {
	"use strict";
	var hero = jQuery('.fotofly_fn_heroheader');
	var H = jQuery(window).height();
	hero.each(function () {
		var element = jQuery(this);
		var WHOption = element.data('window-height');
		var content = element.find('.heroheader_content_wrap');
		var paddingTop = element.data('padding-top');
		var paddingBottom = element.data('padding-bottom');
		if (WHOption.length && WHOption === 'on') {
			content.css({ height: H });
		} else {
			content.css({ paddingTop: paddingTop, paddingBottom: paddingBottom });
		}
	});
}
// -----------------------------------------------------
// ---------------   STICKY SIDEBAR    -----------------
// -----------------------------------------------------
function fotofly_fn_sticky_sidebar() {
	"use strict";

	var sticky = jQuery('.sticky_sidebar');

	sticky.each(function () {
		var element = jQuery(this);
		element.theiaStickySidebar({
			containerSelector: '', // The sidebar's container element. If not specified, it defaults to the sidebar's parent.
			additionalMarginTop: 20,
			additionalMarginBottom: 20,
			updateSidebarHeight: true, // Updates the sidebar's height. Use this if the background isn't showing properly, for example.
			minWidth: 979, // The sidebar returns to normal if its width is below this value. 
		});
	});

}
// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------
function fotofly_fn_magnific_popup() {
	"use strict";

	jQuery('.open-popup-link').magnificPopup({
		type: 'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});

	jQuery('.gallery').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			}
		});
	});
	jQuery('.gallery_zoom').each(function () { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
				enabled: true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
}
// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------
function fotofly_fn_jarallax() {
	"use strict";

	jQuery('.jarallax').each(function () {
		var element = jQuery(this);
		var customSpeed = element.data('speed');

		if (customSpeed !== "undefined" && customSpeed !== "") {
			customSpeed = customSpeed;
		} else {
			customSpeed = 0.5;
		}

		element.jarallax({
			speed: customSpeed
		});
	});

}
// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------
function fotofly_fl_isotope() {
	"use strict";
	var isotope = jQuery('.fotofly_fn_masonry');

	isotope.each(function () {
		jQuery(this).isotope({
			itemSelector: '.fotofly_fn_masonry_in',
			masonry: {

			}
		});
	});

}
// -----------------------------------------------------
// -------------    VERTICAL MENU OPENER ---------------
// -----------------------------------------------------
function fotofly_fn_vermenuopener() {
	"use strict";

	var btn = jQuery('.header_helper ul li.trigger a');
	var verMenu = jQuery('.fotofly_fn_vertmenu');
	var verMenuLeft = jQuery('.fotofly_fn_vertmenu_left');
	var close = jQuery("#floatingmes");

	btn.on('click', function () {
		verMenu.addClass('opened');
		verMenuLeft.addClass('opened');
	});

	verMenuLeft.on('click', function () {
		verMenu.removeClass('opened');
		verMenuLeft.removeClass('opened');
		close.hide();
		return false;
	});

}
function fotofly_fn_vermenuopener_W() {
	"use strict";
	var verMenu = jQuery('.fotofly_fn_vertmenu');
	var verMenuLeft = jQuery('.fotofly_fn_vertmenu_left');
	var W = jQuery(window).width();
	var close = jQuery("#floatingmes");

	if (W < 1020) {
		verMenu.removeClass('opened');
		verMenuLeft.removeClass('opened');
		close.hide();
	}

}
// -----------------------------------------------------
// -------------    VERTICAL MENU SCROLL ---------------
// -----------------------------------------------------
function fotofly_fl_vermenuscroll() {
	"use strict";

	var H = jQuery(window).height();
	var scrollable = jQuery('.scrollable');

	var verMenu = jQuery('.fotofly_fn_vertmenu');

	verMenu.css({ height: H });

	scrollable.each(function () {
		var element = jQuery(this);
		var wH = jQuery(window).height();

		element.css({ height: wH });

		element.niceScroll({
			touchbehavior: false,
			cursorwidth: 0,
			autohidemode: true,
			cursorborder: "0px solid #eee"
		});
	});

}
// -----------------------------------------------------
// -------------    VERTICAL SUBMENU    ----------------
// -----------------------------------------------------
function fotofly_fn_versubmenu() {
	"use strict";

	var nav = jQuery('ul.nav_ver');

	nav.find('a').on('click', function (e) {


		var element = jQuery(this);
		var parentItem = element.parent('li');
		var parentItems = element.parents('li');
		var parentUls = parentItem.parents('ul.sub_menu');
		var subMenu = element.next();
		var allSubMenusParents = nav.find('li');

		allSubMenusParents.removeClass('opened');

		if (subMenu.length) {

			e.preventDefault();

			if (!(subMenu.parent('li').hasClass('active'))) {
				if (!(parentItems.hasClass('opened'))) { parentItems.addClass('opened'); }

				allSubMenusParents.each(function () {
					var el = jQuery(this);
					if (!el.hasClass('opened')) { el.find('ul.sub_menu').slideUp(); }
				});

				allSubMenusParents.removeClass('active');
				parentUls.parent('li').addClass('active');
				subMenu.parent('li').addClass('active');
				subMenu.slideDown();


			} else {
				subMenu.parent('li').removeClass('active');
				subMenu.slideUp();
			}
			return false;
		}
	});
}
// -----------------------------------------------------
// ------------    HORIZONTAL SUBMENU    ---------------
// -----------------------------------------------------
function fotofly_fn_horsubmenu() {
	"use strict";

	var nav = jQuery('ul.nav__hor');
	var W = jQuery(window).width();
	var delay = 100;

	nav.each(function () {
		var elementNav = jQuery(this);

		var submenu = elementNav.find('.sub_menu');

		submenu.each(function () {
			var element = jQuery(this);
			var submenuW = element.width();
			var submenuLeftOffset = element.offset().left;

			if (W < (submenuLeftOffset + submenuW)) {
				element.addClass('reversed');
			}

		});

		elementNav.find('li').on('mouseover', function (e) {
			e.preventDefault();

			var element = jQuery(this);
			var submenu = element.children('ul');

			if (submenu.length) {
				setTimeout(function () { submenu.css({ visibility: 'visible', opacity: 1, transform: 'translateY(0) translateZ(0)' }); }, delay);
			}


		}).on('mouseleave', function (e) {
			e.preventDefault();

			var element = jQuery(this);
			var submenu = element.children('ul');

			if (submenu.length) {
				setTimeout(function () { submenu.css({ visibility: 'hidden', opacity: 0, transform: 'translateY(20px) translateZ(0)' }); }, delay);
			}

		});

	});

}
// -----------------------------------------------------
// --------------     HEADER RESPONSIVE     ------------
// -----------------------------------------------------
function fotofly_fn_headerresponsive() {
	"use strict";

	var helperW = jQuery('.fotofly_fn_header .header_helper').width();
	var headerList = jQuery('.fotofly_fn_header .header_list');


	headerList.css({ paddingRight: helperW, paddingLeft: helperW });
}
// -----------------------------------------------------
// --------------     MAIN FLEXSLIDER     --------------
// -----------------------------------------------------
function fotofly_fn_mainslider() {
	"use strict";

	var flexslider = jQuery('.fotofly_fn_mainslider .flexslider');

	flexslider.flexslider({
		animation: "fade",
		controlNav: false,
		directionNav: true,
		slideshowSpeed: 4000,
		pauseOnAction: true,
		after: function (slider) {
			if (!slider.playing) {
				slider.play();
			}
		}
	});

}
function fotofly_fn_mainslider_height() {
	"use strict";

	var H = jQuery(window).height();
	var ulli = jQuery('.fotofly_fn_mainslider .flexslider ul.slides > li');
	var mainSlider = jQuery('.fotofly_fn_mainslider');

	ulli.css({ height: H });
	mainSlider.css({ height: H });
}
// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------
function fotofly_fn_imgtosvg() {
	"use strict";

	jQuery('img.svg').each(function () {

		var $img = jQuery(this);
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
}
// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------
function fotofly_fn_totop() {
	"use strict";

	jQuery("a.totop").on('click', function (e) {
		e.preventDefault();
		jQuery("html, body").animate({ scrollTop: 0 }, 'slow');
		return false;
	});
}
function fotofly_fn_totop_myhide() {
	"use strict";

	var toTop = jQuery("a.totop");
	var topOffSet = toTop.offset().top;

	if (topOffSet > 1000) {
		toTop.addClass('opened');
	} else {
		toTop.removeClass('opened');
	}

}