// creating variables for tracking wins,losses and gueses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// push user choices to the end of array
var lettersGuessed = [];
// list of letters from which computer can choose
var compChoices = "abcdefghijklmnopqrstuvwxyz".split("");
//  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
document.onkeyup = function(event) {
  //
  console.log(event);
  if (!compChoices.includes(event.key)) {
    return false;
  }

  //player's guess
  var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
  //for random letter select
  var compGuess = compChoices[Math.floor(Math.random()*compChoices.length)];

  lettersGuessed.push(playerGuess);

  if (playerGuess === compGuess) {
    wins++;
    alert('You Guessed correctly');
    //refreshing player guesses back for playing again
    guessesLeft = 9;

    lettersGuessed.length = 0;
  }
  else if (guessesLeft === 0) {
    losses++;
    alert('You Lost. Try again.');
    guessesLeft = 9;

    lettersGuessed.length = 0;
  }

  else if (playerGuess !== compGuess) {
    guessesLeft--;

  }

  // displaying player's result in HTML
  var html = '<h1>The Psychic Game</h1> ' + '<p>Guess what letter I am thinking of</p>' 
   + '<p> Wins: <span id="wins-tag"> ' +  wins + '</span></p>' + '<p> Losses: <span id="losses-tag">' + losses + '</span></p>' + '<p>Guesses Left: <span id="guessesleft"> ' + guessesLeft + '</span></p>' 
  + 'Your Guesses So Far:"' + lettersGuessed + '</p>';

  document.querySelector('#main').innerHTML = html;

}


// // var html = '<h1>The Psychic Game</h1> ' + '<p>Guess what letter I am thinking of</p>' 
  // + '<p> Wins: <span id="wins-tag"> ' +  wins + '</span></p>' + '<p> Losses: <span id="losses-tag">' + losses + '</span></p>' + '<p>Guesses Left: <span id="guessesleft"> ' + guessesLeft + '</span></p>' 
  // + 'Your Guesses So Far: <span id="sofar>"' + lettersGuessed + '</p>';
