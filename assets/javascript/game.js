var alphabet = "abcdefghijklmnopqrstuvwxyz";


var wins = 0;
var losses = 0;
var guessesLeft = 10;
var currentGuesses = [];
var computerGuess;

function chooseComputerLetter() {
	computerGuess  = alphabet[Math.floor(Math.random()* alphabet.length)];
}

function reset() {
	guessesLeft=10;
	currentGuesses= [];
	chooseComputerLetter();
}

chooseComputerLetter();
//have computer generate random letter of the alphabet 

document.onkeyup = function(event) {

	var userGuess = event.key;

	// if user pressed a valid key and userGuess does not exist in the guessed array
	if (alphabet.indexOf(userGuess) !== -1 && currentGuesses.indexOf(userGuess) === -1) {

		if (userGuess===computerGuess) {
			wins++;
			alert("Great job! You win!") 
			reset();	
		} else {
			guessesLeft--;
			currentGuesses.push(userGuess);
		} 

		//for (var i=0; i<1; i++) {
		
		//}		
	}		

	if (guessesLeft === 0) {
		losses++;
		reset();
		alert("Game Over! Try again?");
	}

	var html = "<p>Guess what letter I'm thinking of...10 tries to win the game: </p>" +
	"<p>Wins: " + wins + "</p>" +
	"<p>Losses: " + losses + "</p>" +
	"<p>Guesses Left: " + guessesLeft + "</p>" +
	"<p>Your Guesses so far: " + currentGuesses + "</p>";


	document.getElementById("game").innerHTML = html;
}




