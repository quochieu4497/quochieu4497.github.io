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
		init: function () {
			this.chars = this.text.length;
			return this.write();
		},
		write: function () {
			$(this.container).append(this.text[this.index]);
			if (this.index < this.chars) {
				this.index++;
				return window.setTimeout(function () {
					return app.write();
				}, this.speed);
			}
		}
	};

})
var words = [
	'FullStackVietnam',
	'Chúc Mừng Năm Mới',
	'Neatavietnam',
	'Giáng Sinh An Lành',
	'Con Chim non',
	'hai Con thằn lằn con',
	'Nam quốc sơn hà nam đế cư'
  ];
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
	for(var i = 0; i < textLength; i++) {    
	  (function(i,word){
		letterAppear(i, word);
	  })(i,word)
	}
	
	function letterAppear(i, word) {
	  setTimeout(function() {
		randomLetters(i, word);
	  }, speed*i);  
	}
  
	function randomLetters(i, word) {
	  for (var j = 0; j <= steps; j++) {
		charsAnim(i, word, j);
	  }
	}
  
	function charsAnim(i, word, j) {
	  setTimeout(function() {
		var count = j; 
		if (j < steps) {           
		  randomChar(i, word, count, j);
		} else {
		  goodChar(i, word, count, j);
		}
		/* seems it fails less if I divide j, don't know why */
		/*}, (speed/steps)*(j / 1.8));*/
	  }, ((speed/steps)*j) - (speed/steps));
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
	  if (i == textLength - 1 ) {
		removeWord();
	  }
	}
	
	function removeWord() {
	  setTimeout(function() {
		for (var k = 0; k < textLength; k++) {
		   removeLetters(k);
		}
	  }, speed*2);
	}
	function removeLetters(k) {
	  setTimeout(function() {
		removeLetter(k);
	  }, 75*k);
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
