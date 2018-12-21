
/* 
Let’s say your friend is trying to use JavaScript to work out how many balloons to buy. She’s throwing a party and wants everyone to
have 2 balloons	to	blow up. There were	originally 15 people coming, but then she invited 9 more. 
*/

var manyBallonnsToBuy,
	invited = 15,
	moreInvited = 9
	ballonnsPerPeople = 2;


manyBallonnsToBuy = (invited + moreInvited) * 2
console.log("She must to buy " + manyBallonnsToBuy + " balloon(s).")


// My Age in Seconds:

var ageInYears = 21,
	secondsInMinutes = 60,
	minutesInAnHour = 60,
	hoursInADay = 24,
	daysInAYear = 365,
	secondsInAYear,
	secondsInADay,
	ageInSeconds,
	secondsInAnHour;

secondsInAnHour = secondsInMinutes * minutesInAnHour
secondsInADay = hoursInADay * secondsInAnHour
secondsInAYear = secondsInADay * daysInAYear

ageInSeconds = ageInYears * secondsInAYear

console.log("You are " + ageInSeconds + " seconds old")

// Capitalize

var text = "hELlo THERE, hOW ARE yOu doINg?",
	firstLetterCapitalize,
	secondHalf,
	textCapitalize;

firstLetterCapitalize = text[0].toUpperCase()
secondHalf = text.toLowerCase().slice(1)
textCapitalize = firstLetterCapitalize + secondHalf
// var textCapitalize = text[0].toUpperCase() + text.slice(1).toLowerCase()
console.log("Text in capitalize is: " + textCapitalize)

// should Go To School

var isWeekend = false,
	hadShower = true,
	hasApple = false,
	hasOrange = true,
	shouldGoToSchool;

if (!isWeekend) {
	if (hadShower) {
		if (hasOrange || hasApple) {
			console.log("You should go to school, did not forget nothing!!")
		}
		else {
			console.log("you don't have a lunch")
		}
	}
	else {
		console.log("You should to take a shower!")
	}
}
else {
	console.log("Today you're free!!")
}

// or more simple
shouldGoToSchool = !isWeekend && hadShower &&(hasApple || hadShower)
if (shouldGoToSchool) {
	console.log("You should go to school, did not forget nothing!!");
}
						
/* You’ve been asked by the local movie theater managers to implement some JavaScript for a new automated system they’re building.
They want to be able to work out whether someone is allowed into a PG-13 movie or not.
The rules are, if someone is 13 or over, they’re allowed in. If they’re not over 13, but they are accompanied by an adult, they’re also
allowed in. Otherwise, they can’t see the movie. */

var agePg = 13,
	age = 12,
	isWithAdult = true;

if (age >= 13) {
	console.log("Welcome to theater!!")
} else if (isWithAdult) {
	console.log("Welcome!! only cause you're with an adult!!!")
} else {
	console.log("You can't pass on it")
}


var favoriteVegetable = null
var lastName;

//LastName is Undefined