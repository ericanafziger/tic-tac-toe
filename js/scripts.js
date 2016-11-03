// Business End
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
    $(this).text(currentPlayer.symbol);
    switchPlayer();
  });
});
