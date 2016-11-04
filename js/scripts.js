// Business End
var allValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
// var winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6]];

var Player = function(name, symbol, winCount, colors) {
  this.names = name;
  this.symbol = symbol;
  this.winCount = winCount;
  this.colors = colors;
}

var playerOne = new Player("", "X", 0, "#fff");
var playerTwo = new Player("", "O", 0, "#000");

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
    $(".btn").css("background-color", "#5bc0de");
    $(".btn").css("border-color", "#46b8da");
    currentPlayer.winCount += 1;
    $("#playerOneWins").text(playerOne.winCount);
    $("#playerTwoWins").text(playerTwo.winCount);
  } else if (allValues[0] !== 0 && allValues[1] !== 0 && allValues[2] !== 0 && allValues[3] !== 0 && allValues[4] !== 0 && allValues[5] !== 0 && allValues[6] !== 0 && allValues[7] !== 0 && allValues[8] !== 0) {
    $("#winnerIs").text("You're both losers!");
    allValues = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    $(".btn").css("background-color", "#5bc0de");
    $(".btn").css("border-color", "#46b8da");
  }
}


// User Interface Logic

$(document).ready(function() {
  debugger;

  $("#nameInputs").submit(function(event){
    event.preventDefault();
    playerOne.names = $("input#playerOneNameInput").val();
    playerTwo.names = $("input#playerTwoNameInput").val();

    if (playerOne.names !== "" && playerTwo.names !== "") {
      debugger;
      $("body").removeClass("uhoh");
      $(".playerOneName").text(playerOne.names);
      $(".playerTwoName").text(playerTwo.names);

      $("#playerOneWins").text(playerOne.winCount);
      $("#playerTwoWins").text(playerTwo.winCount);
      $("#playerOneName").addClass("chosen");
      $("#colorPicker").delay(700).show("slide", { direction: "right" }, 1000);
      $("#nameInputs").hide("slide", { direction: "left" }, 1000);
    } else {
      alert("Fill out all the forms, please!")
      $("body").addClass("uhoh");
    }
  });

  $("#colorPicker").submit(function(event) {
    event.preventDefault();
    playerOne.colors = $("input#colorPlayerOne").val();
    playerTwo.colors = $("input#colorPlayerTwo").val();
    $(".playerOneName").css("color", playerOne.colors);
    $(".playerTwoName").css("color", playerTwo.colors);

    $("#game").delay(700).show("slide", { direction: "right" }, 1000);
    $("#colorPicker").hide("slide", { direction: "left" }, 1000);
  })
  console.log(playerOne.names);

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
    $(this).css("background-color", currentPlayer.colors);
    $(this).css("border-color", currentPlayer.colors);
    allValues[buttonValue] = currentPlayer.symbol;

    checkWinner();
    switchPlayer();
    console.log(allValues);
  });
});
