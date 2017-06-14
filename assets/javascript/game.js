var alphabet = "abcdefghijklmnopqrstuvwxyz";


var wins = 0;
var losses = 0;
var left = 10;
var guessed = [];


//have computer generate random letter of the alphabet 

document.onkeyup = function(event) {

	var userGuess = event.key;

	var computerGuess = alphabet[Math.floor(Math.random()* alphabet.length)];

	
if (userGuess === "a","b","c","e","f","g","h","i","j","k","l","m","n","o","p",
	"q","r","s","t","u","v","w","x","y","z") {

	if(userGuess===computerGuess){
			wins++; 	
		
	} else {
		left--;

for(var i=0; i<1; i++) {
	guessed.push(userGuess);
	}		
}		
}


var html = "<p>Guess what letter I'm thinking of:</p>" +
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses + "</p>" +
"<p>Guesses Left: " + left + "</p>" +
"<p>Your Guesses so far: " + guessed + "</p>";


document.getElementById("game").innerHTML = html;}




