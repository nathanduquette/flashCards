var ClozeCard = function(text, cloze){
	this.fullText = text;
	this.cloze = cloze;
	this.partial = function(){
		if (text.includes(cloze)){
			return text.replace(cloze, "...");
		}

		else{
			return "error";
		}
	}
}

var clozeFlashCards = new ClozeCard( "George Washington was the first president of the US", "George Washington")

console.log(clozeFlashCards.partial());


module.exports = ClozeCard

