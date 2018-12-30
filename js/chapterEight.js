var  myFirstFunction = function () {
	console.log("Hello World!");
}

myFirstFunction();

// whith Arguments
var sayHello = function (name) {
	console.log("Hello " + name + "!");
}

var drawCats = function (howManyTimes) {
	for (let i = 0; i < howManyTimes; i++) {
		console.log(i + " =o.o=");
	}
}

//#1 doing arithmetic with functions

var add = function (numberOne, numberTwo) {
	return numberOne + numberTwo;
}

var multiply = function (numberOne, numberTwo) {
	return numberOne * numberTwo;
}

console.log("the result is: " + add(multiply(36325, 9824), 777))

//#2 Are these arrays the same?

var areArraysSame = function(arrayOne, arrayTwo) {
	for (let i = 0; i < arrayOne.length; i++) {
		if (arrayOne[i] != arrayTwo[i]) {
			return false
		}
	}
	return true
}

console.log(areArraysSame([1,2,3,4, 5], [1,2,3,4]))