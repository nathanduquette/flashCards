var inquirer = require("inquirer")
var BasicCard = require("./basicCard.js")
var ClozeCard = require("./clozeCard.js")


// inquirer.prompt([
// 	{
// 		type: "list",
// 		message: "choose flash card type",
// 		choices: ["Basic", "cloze"],
// 		name: "choice"
// 	}
// ])

// .then(function(user){
// 	var inputResults = user.choice;
// 	console.log(inputResults);
// })


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// // "George Washington"
// console.log(firstPresident.back); 

// var firstPresidentCloze = new ClozeCard(
//     "George Washington was the first president of the United States.", "George Washington");

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial()); 

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText) 

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");