var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
          "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x",
          "y", "z"];
var wins = 0;
var losses = 0;
var guessLetter;
var guessesLeft = 10;
var winningLetter;

// Function that chooses random letter from array named letter defined above.
function randLetter() {
    var letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
}

// Function to clear an element box on the html page.
function clearBox(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

// when the page finishes loading assigns random letter to the winngingLetter var.
$(document).ready(function () {
   winningLetter = randLetter();
 });


 // Captures keyboard input. Depending on the letter pressed it will 
 // "call" (execute) different functions.
 document.onkeyup = function(event) {
    
            // Captures the key press, converts it to lowercase, and saves it to a variable.
            guessLetter = String.fromCharCode(event.keyCode).toLowerCase();

            // If user guesses correctly
            if (guessLetter == winningLetter) {
              alert("YOU WIN! " + "Winning letter is " + winningLetter + ".");
              wins++;
              document.getElementById("winBox").innerHTML = wins;
              guessesLeft = 10;
              winningLetter = randLetter();
              clearBox("guess");
            }
            else {
              guessesLeft -= 1;
              document.getElementById("remainingGuess").innerHTML = guessesLeft;
              console.log(guessesLeft);
              document.getElementById("guess").innerHTML += guessLetter + ", ";
            }

            if (guessesLeft == 0) {
              alert("YOU LOST! BOOHOO T.T " + "Winning letter was " + winningLetter + ".");
              losses += 1;
              document.getElementById("lossBox").innerHTML = losses;
              guessesLeft = 10;
              clearBox("guess");
              winningLetter = randLetter();
            }
            
 }