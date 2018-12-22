// arrays

var sports = [
	"Basseball",
	"soccer",
	"Basketball",
	"Tennis",
	"Pool",
	"Chess"
];

var maxValue,
	minValue

sports[0] = "beisbol"
console.log(sports)


//Finding the length of an Array

/* 
Methods about array 
	push // add element in the last position
	unshift // add element in the first position
	pop // get and delete the last item from array
	shift // get and delete the first item from array
	concat // add multiple arrays to other 
	indefOf // get index of an element
	join // to join all the elements in an array 

Properties about array 
	length // return array's size
*/


console.log(sports.length) // get array's size
console.log(sports.pop()) 
console.log(sports.shift()) // get and delete the first item from array
console.log(sports.unshift("PaintBall"))
console.log(sports)

console.log("my favorite sport is: " + sports[0] + ". But so I like to play " + sports[1] + " too.")

// number random between two value
var numberRandom = Math.floor(((maxValue * Math.random()) - minValue) + minValue)



//#1: How to do Reggaeton

var firstAbjetives = ["Mami", "Gata", "Perra", "Zorra", "Chica"],
	futureVerbs = ["yo quiero", "vamos a", "yo voy a", "yo vengo a"],
	verbs = ["castigarte", "cogerte", "encenderte", "darte", "azotarte"],
	secondAbjetives = ["duro", "rapido", "lento", "suave", "fuerte"],
	evenWhen = ["hasta que salga el sol", "toda la noche", "hasta el amanecer", "hasta mañana", "todo el dia"],
	asYouDo = ["sin miedo", "sin anestesia", "en el piso", "contra la pared", "sin compromiso"],
	sentence = [];

function getAndPushElement(array) {
	var random = Math.floor(Math.random() * array.length)
	var element = array[random] 
	sentence.push(element)
} 

getAndPushElement(firstAbjetives)
getAndPushElement(futureVerbs)
getAndPushElement(verbs)
getAndPushElement(secondAbjetives)
getAndPushElement(evenWhen)
getAndPushElement(asYouDo)

console.log(sentence)

document.write(`<hr> Nueva frase de Reggaeton: ` + sentence.join(' '))

