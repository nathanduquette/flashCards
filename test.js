var inquirer = require("inquirer");
var built = [];
var userCards = [];



function Card(front, back){
	this.front = front,
	this.back = back,
// }

// Card.prototype.
	this.newCard = function(front, back) {
		inquirer.prompt([
		{
		name: "front",
		message: "Item: "
		},
		{
		name: "back",
		message: "Definition: "	
		}
		]).then(function(build) {
			if(front !== "" && back !== ""){
				userCards.push(build);
				console.log(built);
				console.log(userCards);

			}else{ 
				console.log("error");
			}
			// built.append(userCards);
			// for (var i = 0; i < userCards.length; i++) {
   //  			console.log(userCards);
   //  			return;
    		
			// var card = new Card(this.newCard.front, this.newCard.back);
			
			// userCards.push(build);
			// console.log("!" + JSON.stringify(userCards, null, 2));
			// console.log(build);
			// return(front, back);
		

		})
		
		
	}

} //remove for proto
Card();
newCard()

