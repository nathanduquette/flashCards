// var firstPresident = new BasicCard(
//     "Who was the first president of the United States?", "George Washington");
// // grab all these at random from a .txt file?



var card1 = new Card("charAt()","Returns the character at the specified index (position)");
var card2 = new Card("toUpperCase()"," Converts a string to uppercase letters");
var card3 = new Card("concat()", "Joins two or more strings, and returns a new joined strings");
var card4 = new Card("slice()", "Extracts a part of a string and returns a new string");
var card5 = new Card("trim()",	"Removes whitespace from both ends of a string");
var card6 = new Card("split()","Splits a string into an array of substrings");
var card7 = new Card("match()", "Searches a string for a match against a regular expression, and returns the matches");
var card8 = new Card("Hoisting", "is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function))";
var card9 = new Card("splice()", "Method adds/removes items to/from an array, and returns the removed items");
var card10 = new Card("join()",	"Joins all elements of an array into a string");
var card11 = new Card("map()", "Creates a new array with the result of calling a function for each array element");
var card12 = new Card("reduce()", "Reduce the values of an array to a single value (going left-to-right)");
var card13 = new Card("sort()",	"Sorts the elements of an array");
var card14 = new Card("call", "write a method once and then inherit it in another object, without having to rewrite the method for the new object");
var card15 = new Card("apply", "you can assign a different this object when calling an existing function");

var allCards = [card1 , card2 , card3 , card4 , card5 , card6 , card7 , card8 , card9 , card10 , card11 , card12 , card13 , card14 , card15]


function Card(front, back){
	this.front = front, 
    this.back  = back,
}



// Card.prototype.getFull = function() {
//     return this.front + " " + this.back;
// };

// Card.prototype.getFront = function() {
// 	return this.front 
// };

// Card.prototype.getBack = function() {
// 	return this.back
// };

// Card.prototype.getFull = function() {
//     return this.front + " " + this.back;
// };

// Card.prototype.getFront = function() {
// 	return this.front 
// };

// Card.prototype.getBack = function() {
// 	return this.back
// };


// for(var i = 0; i < arr.length; i++)



// question will be picked at random and console.log(this.back)
// // "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops"); 



// BasicCard.js------> module.exports = BasicCard(front, back);

// ClozeCard.js------> module.exports = ClozeCard(text, cloze);=====output---------->cloze     contains only the cloze-deleted portion of the text
// 																	   ^--------->partial	contains only the partial text
// 																	   ^--------->fullText	contains only the full text
// 																	   ^----The constructor should throw or log an error when the cloze deletion does not appear in the input text.

// 																	   