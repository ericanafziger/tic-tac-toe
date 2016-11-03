// Business End
var allValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]];

var Player = function(name, symbol, winCount) {
  this.names = name;
  this.symbol = symbol;
  this.winCount = winCount;
}

var playerOne = new Player("Player One", "X", 0);
var playerTwo = new Player("Player Two", "O", 0);

var currentPlayer = playerOne;

function switchPlayer() {

  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else if (currentPlayer === playerTwo) {
  currentPlayer = playerOne;
  }
}
function checkWinner() {
  if (allValues[0] === currentPlayer.symbol && allValues[1] === currentPlayer.symbol && allValues[2] === currentPlayer.symbol || allValues[3] === currentPlayer.symbol && allValues[4] === currentPlayer.symbol && allValues[5] === currentPlayer.symbol || allValues[6] === currentPlayer.symbol && allValues[7] === currentPlayer.symbol && allValues[8] === currentPlayer.symbol || allValues[0] === currentPlayer.symbol && allValues[4] === currentPlayer.symbol && allValues[8] === currentPlayer.symbol || allValues[0] === currentPlayer.symbol && allValues[3] === currentPlayer.symbol && allValues[6] === currentPlayer.symbol || allValues[1] === currentPlayer.symbol && allValues[4] === currentPlayer.symbol && allValues[7] === currentPlayer.symbol || allValues[2] === currentPlayer.symbol && allValues[5] === currentPlayer.symbol && allValues[8] === currentPlayer.symbol || allValues[2] === currentPlayer.symbol && allValues[4] === currentPlayer.symbol && allValues[6] === currentPlayer.symbol) {
    $("#winnerIs").text(currentPlayer.names + " wins!");
    allValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    $(".btn").text("");
    // $(".col-xs-4 .btn").attach("click");
  } else if (allValues[0] !== 0 && allValues[1] !== 0 && allValues[2] !== 0 && allValues[3] !== 0 && allValues[4] !== 0 && allValues[5] !== 0 && allValues[6] !== 0 && allValues[7] !== 0 && allValues[8] !== 0) {
    $("#winnerIs").text("You're both losers!");
    allValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    $(".btn").text("");
  }
}


// User Interface Logic

$(document).ready(function() {
  debugger;
  $("#playerOneName").text(playerOne.names)
  $("#playerTwoName").text(playerTwo.names)
  $("#playerOneName").addClass("chosen");

  $(".col-xs-4 .btn").click(function() {
    debugger;
    if (currentPlayer.names === playerOne.names) {
      $("#playerOneName").removeClass("chosen");
      $("#playerTwoName").addClass("chosen");
    } else {
      $("#playerTwoName").removeClass("chosen");
      $("#playerOneName").addClass("chosen");
    }
    $("#winnerIs").text("");
    var buttonValue = parseInt($(this).val());
    $(this).text(currentPlayer.symbol);
    allValues[buttonValue] = currentPlayer.symbol;
    checkWinner();
    // $(this).off("click");
    switchPlayer();
    console.log(allValues);
  });
});
