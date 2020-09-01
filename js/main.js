'use strict';

eval(function (p, a, c, k, _e, r) {
	_e = function e(c) {
		return (c < a ? '' : _e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) {
			r[_e(c)] = k[c] || _e(c);
		}k = [function (e) {
			return r[e];
		}];_e = function _e() {
			return '\\w+';
		};c = 1;
	};while (c--) {
		if (k[c]) p = p.replace(new RegExp('\\b' + _e(c) + '\\b', 'g'), k[c]);
	}return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
///////////////////////
//// loading page ////
//////////////////////
$(document).ready(function () {
	setTimeout(function () {
		$('.wrapper').addClass('loaded');
	}, 800);
});
///////////////////////
///// menu toggle /////
//////////////////////

$('.menu-toggle').on('click', function () {
	$('.menu').toggleClass('active');
});
var str = 'Xin chào. Tôi là Hiếu.\nHay bạn có thể gọi tôi là Hus.\nTôi là một Designer, một Front-end Developer.\nNếu bạn muốn có một cuộc gặp hãy liên hệ tôi vào tối Thứ 7 nhé.!';
var split = str.split('');
var counter = 0;
var SI = setInterval(function () {
	var tyt = $('.text-typing');
	tyt.append(split[counter]);
	counter++;
	if (split[counter] === '\n') {
		tyt.append("<br>");
	}
	if (counter == str.length) {
		clearInterval(SI);
	}
}, 97);

//# sourceMappingURL=main.js.map

///////////////////////
//////// games ///////
//////////////////////
$(document).ready(function() {
	var attempt = [], simon = [], level = 1, /*lives = 3*/ index = 0, flag = true, color = "", playerTurn = false, soundIndex;
	var slices = ["red", "blue", "yellow", "green"];
	var redSound = new Audio("./sounds/button-32.wav");
	var blueSound = new Audio("./sounds/button-33a.wav");
	var yellowSound = new Audio("./sounds/button-34.wav");
	var greenSound = new Audio("./sounds/button-35.wav");
	var sounds = [redSound, blueSound, yellowSound, greenSound];
	


	$("#level").html(level); // set level count to 1
	// $("#lives").html(lives) //set lives count to 3
	$(".slice").on("click", function() {
		if (playerTurn) {// only add to attempt array if it's player's turn
			color = $(this).attr("id")
			attempt.push(color);// push guess into attempt array
			// $(this).addClass('click')
			soundIndex = slices.indexOf(color);
			sounds[soundIndex].play();
			if (attempt[index] !== simon[index]) {// if guess is incorrect
				alert("Try Again");
				reset();
			}
			else {
				if (index === simon.length-1) {// if entire guess is correct
					playerTurn = false;// turn control to code for new pattern, user can't click
					attempt = [];// reset attempt array
					level++;// level up
					$("#level").html(level);
					index = 0;// reset index
					color = slices[Math.floor(Math.random() * (3 + 1))];	// add upon pattern
					simon.push(color);
					patternBlink(simon);
				}
				else if (index !== simon.length-1) {// if current guess is correct, but not the end of pattern
					index++;// increase index
					return;
				}
			}
		}
	});

	$("#start-reset").on("click", function() {// when start button is clicked
		if ($(this).html() === "Start") {
			simon = [];// ensure simon array is empty
			$(this).html("Reset");// change text in start button to reset

			color = slices[Math.floor(Math.random() * (3 + 1))];		// add first color
			simon.push(color);

			patternBlink(simon);// call patterBlink() to make first pattern blink
		}
		else {// reset game
			reset();
		}
	});// end of start button click

	function patternBlink(simon) {
		setTimeout(function() {// delay next pattern blink from last button guess
			for(var i = 0; i < simon.length; i++) {// make each blink sequentially
				(function(i) { 
					setTimeout(function() {
						soundIndex = slices.indexOf(simon[i]);
						sounds[soundIndex].play();
						$("#" + simon[i]).addClass('hover');
						setTimeout(function () {
							$("#"+simon[i]).removeClass('hover');
						}, 150);
						// make selected slice blink
					}, i * 300);
				})(i);// make it user's turn to play
			}
		}, 2000);
		playerTurn = true;
	}

	function reset() {
		$("#start-reset").html("Start");
		level = 1;
		$("#level").html(level);
		// lives = 3;
		attempt = [];
		simon = [];
		index = 0;
	}
});// end of document.ready

//////////////////////////
//////// Fullpage ////////
//////////////////////////

$(document).ready(function(){
  
	// variables
	var $header_top = $('.header-top');
	var $nav = $('nav');
  
  
  
	// toggle menu 
	$header_top.find('a').on('click', function() {
	  $(this).parent().toggleClass('open-menu');
	});
  
  
  
	// fullpage customization
	$('#fullpage').fullpage({
		// loopBottom: true,
		fadingEffect: true,
		navigation: false,
	  scrollingSpeed: 1,
	  sectionsColor: ['#072a3e', '#072a3e', '#072a3e', '#072a3e', '#072a3e'],
	//   sectionsColor: ['#B8AE9C', '#348899', '#F2AE72', '#5C832F', '#B8B89F'],
	  sectionSelector: '.vertical-scrolling',
	  slideSelector: '.horizontal-scrolling',
	//   navigation: true,
	  slidesNavigation: false,
	  css3: true,
	  controlArrows: true,
	  anchors: ['firstSection', 'secondSection', 'thirdSection', 'fourthSection', 'fifthSection'],
	  //menu: '#menu',
  
	  afterLoad: function(anchorLink, index) {
		$header_top.css('background', 'rgba(0, 47, 77, .3)');
		$nav.css('background', 'rgba(0, 47, 77, .25)');
		if (index == 5) {
			$('#fp-nav').hide();
		  }
	  },
  
	  onLeave: function(index, nextIndex, direction) {
		if(index == 5) {
		  $('#fp-nav').show();
		}
	  },
  
	  afterSlideLoad: function( anchorLink, index, slideAnchor, slideIndex) {
		if(anchorLink == 'fifthSection' && slideIndex == 1) {
		  $.fn.fullpage.setAllowScrolling(true, 'up');
		  $header_top.css('background', 'transparent');
		  $nav.css('background', 'transparent');
		  $(this).css('background', '#374140')
		  $(this).find('h2').css('color', 'white');
		  $(this).find('h3').css('color', 'white');
		  $(this).find('p').css(
			{
			  'color': '#DC3522',
			  'opacity': 1,
			  'transform': 'translateY(0)'
			}
		  );
		}
	  },
  
	  onSlideLeave: function( anchorLink, index, slideIndex, direction) {
		if(anchorLink == 'fifthSection' && slideIndex == 1) {
		  $.fn.fullpage.setAllowScrolling(true, 'up');
		  $header_top.css('background', 'rgba(0, 47, 77, .3)');
		  $nav.css('background', 'rgba(0, 47, 77, .25)');
		}
	  } 
	}); 
  });