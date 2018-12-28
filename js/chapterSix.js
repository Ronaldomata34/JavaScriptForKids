// Say Hello
/*
var users = ["Ronaldo", "Dad", "Mon", "Stranger"],
	random = Math.floor(Math.random() * users.length),
	user = users[random];

if (user == "Ronaldo") {
	console.log("Hi boss, Welcome");
} else {
	console.log("Hello Stranger");
}

// Greeting my Parents

if (user == "Dad") {
	console.log("Hi Father.");
} else if (user == "Mom") {
	console.log("Hi Mother");
} else {
	console.log("Stranger, You are not welcome here.")
}

//Counting Sheep

var sheepCounted = 0,
	turno = true;

while (sheepCounted < 10) {
	if (turno) {
		console.log(1)

	} else {
		console.log(0)
	}
	turno = !turno
}
*/
/* Write a loop to print the powers of 3 under 10,000 (it should print 3, 9, 27, etc.) */

for (let i = 3; i < 10000; i *= 3) {
	console.log(i)
}

var i = 3
while (i < 10000) {
	console.log(i)
	i *= 3
}

// #1:	AWESOME	ANIMALS
var	animals	=	["Cat",	"Fish",	"Lemur", "Komodo Dragon"];

for (let i = 0; i < animals.length; i++) {
	animals[i] = "Awesome " + animals[i] 	
}

console.log(animals)

// #2: RANDOM STRING GENERATOR

var	alphabet = "abcdefghijklmnopqrstuvwxyz",
	newString = "",
	maxLength = 4,
	isVowels = true;

while (newString.length < maxLength) {
	random = Math.floor(Math.random() * alphabet.length)
	letter = alphabet[random]
	newString += letter
}

console.log(newString)

// #3 H4CK3R SP34K+
var input = "javascript is awesome",
	output = "";

for (i = 0; i < input.length; i++) {
	if (input[i] == "a") {
		output += "4"
	} else if (input[i] == "o") {
		output += "0"
	} else if (input[i] == "i") {
		output += "1"
	} else if (input[i] == "e") {
		output += "3"
	} else {
		output += input[i]
	}
}

console.log(output)