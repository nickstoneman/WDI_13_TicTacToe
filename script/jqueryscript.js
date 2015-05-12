var moves = 0;
var gameBoard = [];



$( document ).ready(function() {
  console.log( "ready!" );

    // Store the player moves as X or O in array
    // var gameBoard = [ [0, 0, 0], [0, 0, 0], [0, 0, 0] ];
    // Winning indexPositions. If x === winCombos or o === winCombos gets winner. 
    var winningIndexPositions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];

    var playerX = "X";
    var playerO = "O";
    var playerTurn = "";
    

// THIS WORKS
  // $(".box").each(function(){
  //   gameBoard.push($(this).text());
  //   // console.log(gameBoard);
  // });


   // START GAME FUNCTION
   // Need a playerTurn function to toggle between player moves
    // cointToss selects first turn of X or O
    // var coinToss = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    // console.log(coinToss);



    var playerTurn = function() {
      if (moves % 2 === 0) {
        playerTurn = playerX;
        // return
        // return playerTurn;
        // $( ".box" ).click(function() {
        // $(this).html("<div>apple</div>"); })
        console.log(playerTurn);
      } else {
        playerTurn = playerO;
        // return
        // return playerTurn;
        // $( ".box" ).click(function() {
        // $(this).html("<div>banana</div>"); })
      }
      console.log(playerTurn);
   };
       // 

    
   //Push contents of boxes to array gameBoard 
    $(".box").on("click", function() {
      if (moves % 2 === 0) {
        console.log("move is even");
        $(this).text("X");
        gameBoard.push("x");
      } else {
        console.log("move is odd");
        $(this).text("O");
        gameBoard.push("o");
      }

      // var pushthings = $(this).html("<div>" + playerTurn + "</div>");
      // debugger;
      // playerTurn();
      // console.log("playermove is : " + moves) 

      // gameBoard.push(pushthings);
      // console.log(gameBoard);
      moves = moves + 1;
    });    

    console.log(gameBoard);



  
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

console.log(gameBoard);

});