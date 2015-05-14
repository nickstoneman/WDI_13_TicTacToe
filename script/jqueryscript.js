var moves = 0;
var gameBoard = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
var winningIndexPositions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];

// var playerXArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
// var playerOArray = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];

$( document ).ready(function() {
  // console.log( "ready!" );

  // Store the player moves as X or O in array
  // var gameBoard = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ];
  // Winning indexPositions. If x === winCombos or o === winCombos gets winner. 

    var playerX = "X";
    var playerO = "O";
    var playerTurn = "";

  // START GAME FUNCTION / COIN TOSS
  // Need a playerTurn function to toggle between player moves
  // cointToss selects first turn of X or O
  // var coinToss = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  // console.log(coinToss);

  // Sets first move to "X"
    var playerTurn = function() {
      if (moves % 2 === 0) {
        playerTurn = playerX;
        // console.log(playerTurn);
      } else {
        playerTurn = playerO;
      }
   };
    
   // Change turns- X goes first- then logs move to gameBoard[]
    $(".box").on("click", function() {
      if (moves % 2 === 0) {
        // console.log("move is even");
        $(this).text("X");
        var id = Number(this.id);
        gameBoard[id] = "X";
        // playerXArray[id] = "X";
        // gameBoard.push("x");
      } else {
        // console.log("move is odd");
        $(this).text("O");
        var id = Number(this.id);
        gameBoard[id] = "O";
        // playerOArray[id] = "O";
        // console.log(playerOArray);
      }
      
      //  Decide who wins
      // console.log($.inArray(index, gameBoard[0]));
      
       $.each(winningIndexPositions, function(index, winningCombo) {
          // console.log(winningIndexPositions);
          
           if((gameBoard[winningCombo[0]] ==="X") && (gameBoard[winningCombo[1]] === "X") && (gameBoard[winningCombo[2]] === "X")) {
              console.log("X winner");
            } else if 
             ((gameBoard[winningCombo[0]] ==="O") && (gameBoard[winningCombo[1]] === "O") && (gameBoard[winningCombo[2]] === "O")) {
              console.log("O winner");
            }
          }) 
      moves = moves + 1;
    });

    // if(condition){
    //   statement
    // } else if (condition2){
    //   statement
    // } else {
    //   stament
    // }

    // DECIDE WINNER
    
    // console.log($.inArray("X", gameBoard[2, 4]))
  
    // $( ".box" ).click(function() {
    //   // If its turn #1 do this
    //   $(this).html("<div>Klm</div>");
    //   // If its turn #2 do this
    //   });

    // $( ".box" ).click(function() {
    //   $(this).html("<div>O</div>");
    //   });

    // $( "#1" ).click(function() {
    //   $(this).html("<div>X</div>");
    //   });

    // $( "#2" ).click(function() {
    //   $(this).html("<div>O</div>");
    //   });

});