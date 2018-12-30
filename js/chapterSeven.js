/*var likesCat = confirm("Do you like cats?")

if (likesCat) {
	console.log("I like too!")
} else {
	console.log("I don't like too!")
}

*/
/*
var words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake"
	],
	word  = words[Math.floor(Math.random() * words.length)],
	answerArray = [];

for (let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}

var remainingLetters = word.length;
var numOfGuesses = 4;

while (remainingLetters > 0 && numOfGuesses > 0) {
	var match = false;
	alert(answerArray.join(" "));
	var guess = prompt("Guess a letter, or click Cancel to stop playing.");
	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Please Enter a Single Letter");
	} else {
		guess = guess.toLowerCase()
		for (let j = 0; j < word.length; j++) {
			if (word[j] === guess) {
				if(answerArray[j] == "_") {
					answerArray[j] = guess;
					remainingLetters--;
					match = true
				} else {
					alert("it was added.")
				}
			}
		}
		if (!match) {
			numOfGuesses--;
		}
	}
}

if (numOfGuesses <= 0) {
	alert("You have lose");
} else {
	alert(answerArray.join(" "));
	alert("Good Job! The answer was " + word);
}

*/

// now with functions

var pickWord = function (words) {
	random = Math.floor(Math.random() * words.length);
	return words[random];
}

var setupAnswerArray = function (word) {
	let array = [];
	for (let i = 0; i < word.length; i++) {
		array[i] = "_";
	}
	return array;
}

var showPlayerProgress = function (answerArray) {
	alert(answerArray.join(" "));
}

var getGuess = function () {
	let guess = prompt("Guess a letter, or click Cancel to stop playing.");
	return guess;
}

var updateGameState = function (guess, word, answerArray) {
	var correctGuesses = 0;
	for (let i = 0; i < word.length; i++) {
		if (word[i] === guess) {
			if (answerArray[i] === "_") {
				answerArray[i] = guess;
				correctGuesses++;
			}
		}
	}

	return correctGuesses;
}

var showAnswerAndCongratulatePlayer = function (answerArray) {
	if (numOfGuesses === 0) {
		alert("You have lose!!")
	} else {
		alert("Congratulations the word is: " + answerArray.join(" "))
	}
}


var words = [
	"javascript",
	"monkey",
	"amazing",
	"pancake"
	],
	word = pickWord(words),
	answerArray = setupAnswerArray(word),
	remainingLetters = word.length,
	numOfGuesses = 4;

while (remainingLetters > 0 && numOfGuesses > 0) {
	showPlayerProgress(answerArray);
	var guess = getGuess();
	if (guess == null) {
		break;
	} else if (guess.length !== 1) {
		alert("Please Enter a Single Letter");
	} else {
		var correctGuesses = updateGameState(guess, word, answerArray);
		if (correctGuesses) {
			remainingLetters -= correctGuesses;
		} else {
			numOfGuesses--
		}
		
	}
}

showAnswerAndCongratulatePlayer(answerArray);