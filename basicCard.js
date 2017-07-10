// var BasicCard = function(front, back){
// 	this.front = front;
// 	this.back = back;
// }

// var flashcards = [
//     new BasicCard('Who was first prez?', 'GW'),
//     new BasicCard('Fastest (and also worst) tacos?', 'Taco Cabana'),
// ]

// console.log(flashcards[0].front);

// module.exports = BasicCard

// ----------------------------------------------------------------------



var card1 = new BasicCard("charAt()","Returns the character at the specified index (position)");
var card2 = new BasicCard("toUpperCase()"," Converts a string to uppercase letters");
var card3 = new BasicCard("concat()", "Joins two or more strings, and returns a new joined strings");
var card4 = new BasicCard("slice()", "Extracts a part of a string and returns a new string");
var card5 = new BasicCard("trim()",	"Removes whitespace from both ends of a string");
var card6 = new BasicCard("split()","Splits a string into an array of substrings");
var card7 = new BasicCard("match()", "Searches a string for a match against a regular expression, and returns the matches");
var card8 = new BasicCard("Hoisting", "is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function))";
var card9 = new BasicCard("splice()", "Method adds/removes items to/from an array, and returns the removed items");
var card10 = new BasicCard("join()",	"Joins all elements of an array into a string");
var card11 = new BasicCard("map()", "Creates a new array with the result of calling a function for each array element");
var card12 = new BasicCard("reduce()", "Reduce the values of an array to a single value (going left-to-right)");
var card13 = new BasicCard("sort()",	"Sorts the elements of an array");
var card14 = new BasicCard("call", "write a method once and then inherit it in another object, without having to rewrite the method for the new object");
var card15 = new BasicCard("apply", "you can assign a different this object when calling an existing function");

var allCards = [card1 , card2 , card3 , card4 , card5 , card6 , card7 , card8 , card9 , card10 , card11 , card12 , card13 , card14 , card15]

var BasicCard = function(front, back){
	this.front = front;
	this.back = back;
}

module.exports = BasicCard