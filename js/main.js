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
$(function () {
	var app;

	$(document).ready(function () {
		return app.init();
	});

	app = {
		text: "Chúng tôi là FullStackVietnam",
		index: 0,
		chars: 0,
		speed: 100,
		container: ".text .content",
		init: function init() {
			this.chars = this.text.length;
			return this.write();
		},
		write: function write() {
			$(this.container).append(this.text[this.index]);
			if (this.index < this.chars) {
				this.index++;
				return window.setTimeout(function () {
					return app.write();
				}, this.speed);
			}
		}
	};
});
var words = ['FullStackVietnam', 'Chúc Mừng Năm Mới', 'Neatavietnam', 'Giáng Sinh An Lành', 'Con Chim non', 'hai Con thằn lằn con', 'Nam quốc sơn hà nam đế cư'];
var letters = "abcdefghijklmnopqrstuvwxyz#%&^+=-",
    speed = 200,
    steps = 4,
    loader = document.querySelector('#loader');

function getRandomWord() {
	var randomWord = words[Math.floor(Math.random() * words.length)];
	return randomWord;
}
function getRandomLetter() {
	var randomLetter = letters[Math.floor(Math.random() * letters.length)];
	return randomLetter;
}

function randomWordLoop() {
	var word = getRandomWord();
	var textLength = word.length;
	for (var i = 0; i < textLength; i++) {
		(function (i, word) {
			letterAppear(i, word);
		})(i, word);
	}

	function letterAppear(i, word) {
		setTimeout(function () {
			randomLetters(i, word);
		}, speed * i);
	}

	function randomLetters(i, word) {
		for (var j = 0; j <= steps; j++) {
			charsAnim(i, word, j);
		}
	}

	function charsAnim(i, word, j) {
		setTimeout(function () {
			var count = j;
			if (j < steps) {
				randomChar(i, word, count, j);
			} else {
				goodChar(i, word, count, j);
			}
			/* seems it fails less if I divide j, don't know why */
			/*}, (speed/steps)*(j / 1.8));*/
		}, speed / steps * j - speed / steps);
	}

	function randomChar(i, word, count, j) {
		var letter = getRandomLetter();
		if (j > 0) {
			var oldText = loader.textContent.slice(0, -1);
		} else {
			var oldText = loader.textContent;
		}
		loader.textContent = oldText + letter;
	}
	function goodChar(i, word, count, j) {
		var oldText = loader.textContent.slice(0, -1);
		loader.textContent = oldText + word[i];
		if (i == textLength - 1) {
			removeWord();
		}
	}

	function removeWord() {
		setTimeout(function () {
			for (var k = 0; k < textLength; k++) {
				removeLetters(k);
			}
		}, speed * 2);
	}
	function removeLetters(k) {
		setTimeout(function () {
			removeLetter(k);
		}, 75 * k);
	}
	function removeLetter(k) {
		var actualText = loader.textContent.slice(0, -1);
		loader.textContent = actualText;
		if (k == textLength - 1) {
			randomWordLoop();
		}
	}
}

randomWordLoop();
//# sourceMappingURL=main.js.map
