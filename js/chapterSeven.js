/*var likesCat = confirm("Do you like cats?")

if (likesCat) {
	console.log("I like too!")
} else {
	console.log("I don't like too!")
}

*/

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
	guess = guess.toLowerCase()
	if (guess === null) {
		break;
	} else if (guess.length !== 1) {
		alert("Please Enter a Single Letter");
	} else {
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

