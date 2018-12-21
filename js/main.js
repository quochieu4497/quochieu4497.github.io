'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
$('.menu-toggle').on('click', function () {
	$('.menu').toggleClass('active');
});
var str = "Xin chào mấy chế, tui là Hiếu. là một DESIGNER, FONT-END DEV, PHOTOGRAPHY. ";
var split = str.split("");
var counter = 0;

var SI = setInterval(function () {
	var tyt = $('body .container .text-typing');
	tyt.append(split[counter]);
	counter++;
	if (counter == str.length) {
		clearInterval(SI);
	}
}, 100);

$('.canvas').particles();
$('.canvas').particles({
	maxParticles: 110,
	amount: 100,
	size: 5,
	speed: .5,
	color: {
		r: 255,
		g: 255,
		b: 255,
		a: 0.53
	},
	minDist: 130,
	connectParticles: false
});

///////////////
var particles = [];
var frequency = 20;
// Popolate particles
setInterval(function () {
	popolate();
}.bind(undefined), frequency);

var c1 = createCanvas({
	width: $(window).width(),
	height: $(window).height()
});
var c2 = createCanvas({
	width: $(window).width(),
	height: $(window).height()
});
var c3 = createCanvas({
	width: $(window).width(),
	height: $(window).height()
});

var tela = c1.canvas;
var canvas = c1.context;

// $("body").append(tela);
$("body").append(c3.canvas);
writeText(c2.canvas, c2.context, "QUOCHIEU\nLOVE\nBAOVY");

var Particle = function () {
	function Particle(canvas, options) {
		_classCallCheck(this, Particle);

		var random = Math.random();
		this.canvas = canvas;
		this.x = options.x;
		this.y = options.y;
		this.s = 3 + Math.random();
		this.a = 0;
		this.w = $(window).width();
		this.h = $(window).height();
		this.radius = 0.5 + Math.random() * 20;
		this.color = this.radius > 5 ? "#FF5E4C" : "#ED413C"; //this.randomColor()
	}

	_createClass(Particle, [{
		key: 'randomColor',
		value: function randomColor() {
			var colors = ["#FF5E4C", "#FFFFFF"];
			return colors[this.randomIntFromInterval(0, colors.length - 1)];
		}
	}, {
		key: 'randomIntFromInterval',
		value: function randomIntFromInterval(min, max) {
			return Math.floor(Math.random() * (max - min + 1) + min);
		}
	}, {
		key: 'render',
		value: function render() {
			this.canvas.beginPath();
			this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
			this.canvas.lineWidth = 2;
			this.canvas.fillStyle = this.color;
			this.canvas.fill();
			this.canvas.closePath();
		}
	}, {
		key: 'move',
		value: function move() {
			//this.swapColor()
			this.x += Math.cos(this.a) * this.s;
			this.y += Math.sin(this.a) * this.s;
			this.a += Math.random() * 0.8 - 0.4;

			if (this.x < 0 || this.x > this.w - this.radius) {
				return false;
			}

			if (this.y < 0 || this.y > this.h - this.radius) {
				return false;
			}
			this.render();
			return true;
		}
	}]);

	return Particle;
}();

function createCanvas(properties) {
	var canvas = document.createElement('canvas');
	canvas.width = properties.width;
	canvas.height = properties.height;
	var context = canvas.getContext('2d');
	return {
		canvas: canvas,
		context: context
	};
}

function writeText(canvas, context, text) {
	var size = 100;
	context.font = size + "px Montserrat";
	context.fillStyle = "#111111";
	context.textAlign = "center";
	var lineheight = 70;
	var lines = text.split('\n');
	for (var i = 0; i < lines.length; i++) {
		context.fillText(lines[i], canvas.width / 2, canvas.height / 2 + lineheight * i - lineheight * (lines.length - 1) / 3);
	}
}

function maskCanvas() {
	c3.context.drawImage(c2.canvas, 0, 0, c2.canvas.width, c2.canvas.height);
	c3.context.globalCompositeOperation = 'source-atop';
	c3.context.drawImage(c1.canvas, 0, 0);
	blur(c1.context, c1.canvas, 2);
}

function blur(ctx, canvas, amt) {
	ctx.filter = 'blur(' + amt + 'px)';
	ctx.drawImage(canvas, 0, 0);
	ctx.filter = 'none';
}

/*
 * Function to clear layer canvas
 * @num:number number of particles
 */
function popolate() {
	particles.push(new Particle(canvas, {
		x: $(window).width() / 2,
		y: $(window).height() / 2
	}));
	return particles.length;
}

function clear() {
	canvas.globalAlpha = 0.03;
	canvas.fillStyle = '#111111';
	canvas.fillRect(0, 0, tela.width, tela.height);
	canvas.globalAlpha = 1;
}

function update() {
	clear();
	particles = particles.filter(function (p) {
		return p.move();
	});
	maskCanvas();
	requestAnimationFrame(update.bind(this));
}

update();
//# sourceMappingURL=main.js.map
