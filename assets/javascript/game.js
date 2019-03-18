

var possibleWords = ["ford", "chevrolet", "toyota", "honda", "dodge", "kia", "subaru", "audi", "fiat", "cadillac",];


var selectedWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 10;

function startGame() {
    selectedWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    lettersInWord = selectedWord.split('');
    numBlanks = lettersInWord.length;

    guessesLeft = 10;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = lossCount;


    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);

}

function updateLosses(){
    if (guessesLeft == 0) {roundComplete()}
}

function checkLetters(letter) {

    isLetterinWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            isLetterinWord = true;
            // alert('Letter found');
        }
    }

if (isLetterinWord) {
    for (var i = 0; i < numBlanks; i++) {
        if (selectedWord[i] == letter) {
            blanksAndSuccesses[i] = letter;
        }

    }

}

else {
    wrongLetters.push(letter);
    guessesLeft--

}

console.log(blanksAndSuccesses);

}


function roundComplete() {
    console.log("Win Count: " + winCount + " Loss Count: " + lossCount + "  Guesses Left" + guessesLeft);

    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.toString();
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");

    if (lettersInWord.toString() === blanksAndSuccesses.toString()) {
        winCount++;
        alert('You won')

        document.getElementById("winCounter").innerHTML = winCount;

        startGame()
    }
    else if (guessesLeft) {
        lossCount++ ,
            alert('You lost');

        document.getElementById('lossCounter').innerHTML = lossCount;

        startGame()
    }
}





startGame();


document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    updateLosses();
    console.log(letterGuessed);
}



