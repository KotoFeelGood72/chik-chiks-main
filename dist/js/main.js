


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';


$(document).ready(function ($) {
	$body = $('body');
	if (devStatus) {
		pageWidget(['index']);
		pageWidget(['profile']);
		pageWidget(['policy']);
		pageWidget(['cart']);
		pageWidget(['coin']);
		pageWidget(['history']);
		pageWidget(['order']);
		getAllClasses('html', '.elements_list');
	}
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();
	
	if($('#map')[0]) {
		map();
	}
	if(windowWidth < mediaPoint1) {
		burgerMobile();
		cartMobile();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		// var vh2 = document.documentElement.clientHeight * 0.01;

		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

if ('objectFit' in document.documentElement.style === false) {
	document.addEventListener('DOMContentLoaded', function () {
		Array.prototype.forEach.call(
			document.querySelectorAll('img[data-object-fit]'),
			function (image) {
				(image.runtimeStyle || image.style).background =
					'url("' +
					image.src +
					'") no-repeat 50%/' +
					(image.currentStyle
						? image.currentStyle['object-fit']
						: image.getAttribute('data-object-fit'));

				image.src =
					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
					image.width +
					"' height='" +
					image.height +
					"'%3E%3C/svg%3E";
			}
		);
	});
}

$(window).on("scroll", function () {
	var scrolled = $(this).scrollTop();
	if( scrolled > 107 ) {
			$('.header_custom').addClass('fixed');
	}   
	if( scrolled <= 107 ) {     
			$('.header_custom').removeClass('fixed');
	}
});

$(document).ready(function()  {

	var inputsTel = document.querySelectorAll('input[type="tel"]');
	Inputmask({
		"mask": "+7 (999) 999-99-99",
		showMaskOnHover: false
	}).mask(inputsTel);
})

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: transparent'].join(';');
var message = 'Developed by KotoFeelGood https://api.whatsapp.com/send?phone=79615311386&text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C%2C%20%D1%8F%20%D0%BF%D0%BE%20%D0%BF%D0%BE%D0%B2%D0%BE%D0%B4%D1%83%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D1%8F%20%D1%81%D0%B0%D0%B9%D1%82%D0%B0';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

ScrollTrigger.create({
  
  trigger: ".observer#cocomber",
  
  start: '-=10% center',   
    
  onEnter: () => {
    gsap.to('.products_cat', { duration: 0.4, delay: 0.0, scrollTo: {x: "#cocomber-link", offsetX: 0}, ease: "none"} );
  },
  
  onLeaveBack: () => {
    gsap.to('.products_cat', { duration: 0.4, delay: 0.0, scrollTo: {x: "#up-link", offsetX: 0}, ease: "none"} );
  }

})

ScrollTrigger.create({
  
  trigger: ".observer#naggets",
  
  start: '-=10% center',   
    
  onEnter: () => {
    gsap.to('.products_cat', { duration: 0.5, delay: 0.0, scrollTo: {x: "#naggets-link", offsetX: 0}, ease: "none"} );
  },
  
  onLeaveBack: () => {
    gsap.to('.products_cat', { duration: 0.5, delay: 0.0, scrollTo: {x: "#up-link", offsetX: 0}, ease: "none"} );
  }

})

// const scrollNavigation = Array.from(document.querySelectorAll('.products_catLink')).map((el) => {
// 	const arr = Array.from(el.querySelectorAll('.products_tabList>li')).map(function (item, index) {
// 			return (
// 				ScrollTrigger.create({
  
// 					trigger: ".observer#naggets",
					
// 					start: '-=10% center',   
						
// 					onEnter: () => {
// 						gsap.to('.products_cat', { duration: 0.5, delay: 0.0, scrollTo: {x: "#naggets-link", offsetX: 0}, ease: "none"} );
// 					},
					
// 					onLeaveBack: () => {
// 						gsap.to('.products_cat', { duration: 0.5, delay: 0.0, scrollTo: {x: "#up-link", offsetX: 0}, ease: "none"} );
// 					}
				
// 				})
// 			)
// 	});
// })














const heroSlider = new Swiper('.hero_slider ', {
	speed: 600,
	breakpoints: {
    320: {
      slidesPerView: 3.5,
      spaceBetween: 10,
			freeMode: false,
			slidesOffsetAfter: 10,
    },
    480: {
      slidesPerView: 6,
      spaceBetween: 10,
			freeMode: false,
			slidesOffsetAfter: 10,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 13
    }
	},
	navigation: {
		nextEl: '.other_btn--next',
		prevEl: '.other_btn--prev'
	}
});






	//-------------------------------------------------popup

$(document).ready(function() {

	let popup = $('.popup');
	$('.header_delivery').click(function(e) {
		e.preventDefault();
		$('.address_popup').each(function() {
				$(this).toggleClass('active');
				console.log('Good', this);
				$(this).each(function() {
					$('.close_btn').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
					$('.popup_bg').click(function() {
						$(this).closest('.popup').removeClass('active');
						console.log(this)
					})
				})
		})
	})
	/////////////
	$('.header_burger').click(function() {
			$(popup).removeClass('active')
		$('.burger_popup').each(function() {
				$(this).toggleClass('active');
				$('html').toggleClass('active');
				// console.log('Good', this);
				$(this).each(function() {
					$('.close').click(function() {
						$(this).closest('.popup').removeClass('active');
						$('html').removeClass('active');
						// console.log(this)
					})
					$('.popup_bg').click(function() {
						$(this).closest('.popup').removeClass('active');
						$('html').removeClass('active');
						// console.log(this)
					})
				})
		})
	})

	$('.cart_btnPay').click(function() {
		event.preventDefault();
		$(popup).removeClass('active')
	$('.phone_submit ').each(function() {
			$(this).toggleClass('active');
			$('input[type="tel"]').focus();
			$(this).each(function() {
				$('.close').click(function() {
					$(this).closest('.popup').removeClass('active');
				})
				$('.popup_bg').click(function() {
					$(this).closest('.popup').removeClass('active');
				})
			})
	})
})

$('.phone_submit--medium>p').click(function() {
	$('.phone_code').removeClass('active')
$('.phone_submit').each(function() {
		$(this).toggleClass('active');
		$(this).each(function() {
			$('.close').click(function() {
				$(this).closest('.popup').removeClass('active');
				console.log(this)
			})
			$('.popup_bg').click(function() {
				$(this).closest('.popup').removeClass('active');
				console.log(this)
			})
		})
})
})

$('.phone_submit--bottom').click(function() {
	event.preventDefault();
	$('.phone_submit').removeClass('active')
	$(popup).removeClass('active')
$('.phone_code').each(function() {
		$(this).toggleClass('active');
		console.log('Good', this);
		$(this).each(function() {
			$('.close').click(function() {
				$(this).closest('.popup').removeClass('active');
				console.log(this)
			})
			$('.popup_bg').click(function() {
				$(this).closest('.popup').removeClass('active');
				console.log(this)
			})
		})
})
})

	$('.lisence_type--list li:first').trigger('click');
	$('.action_btn, .popup_sub--btn').click(function() {
		$(popup).removeClass('active');
		succes('.succes');
	})
	/////////////
	$('.trigger_details').click(function() {
		$('.products_detailsContentWrapper ').each(function() {
				$(this).toggleClass('active');
				$(this).each(function() {
					$('.productsDetails_bg').click(function() {
						$(this).closest('.products_detailsContentWrapper').removeClass('active');
					})
				})
		})
	})

})



	//-------------------------------------------------popup###








function burgerMobile() {
	$('.header_nav, .popup_burger--list>li>a, .popup_burger--bg').click(function() {
		$('.popup_burger').toggleClass('active');
		$('.close_btn').click(function() {
			$(this).closest('.popup_burger').removeClass('active');
		})
	})
}


$(document).ready(function() {
	let card = $('.products_card');
	let triggerCard = $('.products_qtyTrigger');
	let triggerDelete = $('.minus_qty')

	// $(triggerCard).on('click', () => {
	// 	$(card).addClass('active')
	// })

	$(card).each(function() {
		$(triggerCard).click(function() {
			$(this).closest(card).addClass('active');
			// console.log('Good add')
			// if($(this).closest(card).hasClass('active')) {
			// 	$(this).closest(card).siblings().removeClass('active');
			// }

		})
		if($(this).find(triggerDelete).click(function(){
			$(this).closest(card).removeClass('active');
		})) {
			$(this).closest(card).removeClass('active');
			// console.log('click delete', this)
		}
	})

})

// tabs
function tabs(link, block) {
	let linkSelector = $(link),
		blockSelector = $(block);

	$(linkSelector).on('click', function (e) {
		e.preventDefault();

		let $this = $(this),
			currentData = $(this).data('tab');

		$(blockSelector).removeClass('active_tab');
		$(linkSelector).removeClass('active_tab');

		$(block + '[data-tab="' + currentData + '"]').addClass('active_tab');
		$this.addClass('active_tab');

	});
}

$(document).ready(function() {
	tabs('.address_popupVariant li ', '.address_content');
})

 

function map() {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
						center: [60.144095, 29.930985],
						zoom: 16,
						scroll: false,
				}, {
						searchControlProvider: 'yandex#search'
				}),
	
				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
						balloonContent: 'ул. Петровская, 53 Санкт-Петербург, Россия'
				}, {
						iconLayout: 'default#image',
						iconImageHref: '/i/logo.jpg',
						iconImageSize: [33, 33],
						iconImageOffset: [-5, -38]
				});
	
		myMap.geoObjects
				.add(myPlacemark)
	});
}




const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}


if(rangeInputs) {
	// numberInput.addEventListener('input', handleInputChange);
	const rangeSlider = Array.from(rangeInputs).map((el) => {
		el.addEventListener('input', handleInputChange)
	})
	
}





window.onload = function() {
  var sec = 60;
  setInterval(function() {
    document.getElementById("rocket").innerHTML = "00 : " + sec;
    sec--;
    if (sec == 00) {
      sec = 60;
    }
  }, 1000);
}




const root = document.documentElement;

function getCustomPropertyValue(name) {
  const styles = getComputedStyle(root);
  return styles.getPropertyValue(name);
}

/* 
  SMS Code input logic

  
  Disclaimer: this «pen» was made for presentational pruposes.
  It's not a production-ready solution, because it lacks of many best UX and a11y
  practices. Let it inspire you and I hope you will enjoy it :) 
*/
$(document).ready(function() {
	const fieldset = document.querySelector(".fieldset");
	const fields = document.querySelectorAll(".field");
	const boxes = document.querySelectorAll(".box");
	
	function handleInputField({ target }) {
		const value = target.value.slice(0, 1);
		target.value = value;
	
		const step = value ? 1 : -1;
		const fieldIndex = [...fields].findIndex((field) => field === target);
		const focusToIndex = fieldIndex + step;
	
		if (focusToIndex < 0 || focusToIndex >= fields.length) return;
	
		fields[focusToIndex].focus();
	}
	fields.forEach((field) => {
		field.addEventListener("input", handleInputField);
	});
})



$(document).ready(function() {
	
	$('.products_cat>li>a').bind("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 80
		}, 100);
		e.preventDefault();
	});
		var lastId,
		topMenu = $(".products_cat>li"),
		topMenuHeight = topMenu.outerHeight()+150,
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }
		});



	$(window).scroll(function(){
	 // Get container scroll position
	 var fromTop = $(this).scrollTop()+topMenuHeight;
	
	 // Get id of current scroll item
	 var cur = scrollItems.map(function(){
		 if ($(this).offset().top < fromTop)
			 return this;
	 });
	// Get the id of the current element
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";
	
	if (lastId !== id) {
	 lastId = id;
	 // Set/remove active class
	 menuItems
		 .parent().removeClass("active")
		 .end().filter("[href='#"+id+"']").parent().addClass("active");

	}
	});

})

$(document).ready(function() {
	const heroSlider = Array.from(document.querySelectorAll('.hero_slide')).map((item) => {
		item.addEventListener('click', function() {
			new SlideStories('slide');
			$('.stories').toggleClass('active');
			$('.stories_bg, .close_stories').click(function() {
				$('.stories').removeClass('active')
			})
		})
	})

	$('.thigger_product, .product_close').click((e) => {
		e.preventDefault();
		$('.products').toggleClass('active');
		$('html').toggleClass('active');
	})




	$('.cart_variant').on('click', function() {
		$('.wallet').addClass('active')
	})

		$('.wallet_item>label, .wallet_bg').click(function() {
			disableWallet();
		})

	function disableWallet () {
		setTimeout(function() {
			$('.wallet').removeClass('active');
		}, 300)
	}
		
})




function cartMobile() {
	$('.products_qtyTrigger').on('click', () => {
		$('.minicart').addClass('active');
	})
	$('.products_cardBottom').click(function() {
		if($('.products_card').hasClass('active')) {
			$('.minicart').addClass('active');
		} else {
			$('.minicart').removeClass('active');
		}
	})
	$('.products_btnCart').click(function() {
		$('.products').removeClass('active');
		$('html').removeClass('active');
		$('.minicart').addClass('active');
	})
}







document.addEventListener('DOMContentLoaded', (e) => {
	let loader = document.querySelector('.loader');
	let	hiddens = document.querySelector('body');
	setTimeout(() => {
		loader.classList.add('is-hidden');
		hiddens.classList.remove('is-hidden');
	}, 100)
})

























































