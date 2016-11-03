// Business End
var allValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]];

var Player = function(name, symbol, winCount) {
  this.names = name;
  this.symbol = symbol;
  this.winCount = winCount;
}

var playerOne = new Player("playerOne", "X", 0);
var playerTwo = new Player("playerTwo", "O", 0);

var currentPlayer = playerOne;

function switchPlayer() {

  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else if (currentPlayer === playerTwo) {
  currentPlayer = playerOne;
  }
}


// User Interface Logic

$(document).ready(function() {
  debugger;

  $(".col-xs-4 .btn").click(function() {
    debugger;
    var buttonValue = parseInt($(this).val());
    $(this).text(currentPlayer.symbol);
    allValues[buttonValue] = currentPlayer.symbol;
    switchPlayer();
    console.log(allValues);
  });

});
