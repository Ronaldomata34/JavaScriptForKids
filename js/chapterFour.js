// Playing game with some friends

var playerOne = {
		name: "Pikachu",
		health: 100,
		power: Math.round(Math.random() * 10)
	},
	playerTwo = {
		name: "Latios",
		health: 100,
		power: Math.round(Math.random() * 10)
	},
	turn = true;

while (playerOne.health > 0 && playerTwo.health > 0) {
	if (turn) {
		playerTwo.health -= playerOne.power
	} else {
		playerOne.health -= playerTwo.power
	}
	turn =! turn
}

console.log(playerOne.name + " Power: " + playerOne.power)
console.log(playerTwo.name + " Power: " + playerTwo.power)

if (playerOne.health > 0) {
	console.log("El ganador es " + playerOne.name)
} else {
	console.log("El ganador es " + playerTwo.name)
}



var	myCrazyObject	=	{
		"name":	"A ridiculous object",
		"some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3],
		"random animal": "Banana Shark"
	};

/*How would you get the number 123 out of this object using one line of JavaScript? Try it out in the
console to see if you’re right.*/

var number = myCrazyObject["some array"][2].number
console.log(number)