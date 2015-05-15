var moves = 0;
// var gameBoard = ["0", "0", "0", "0", "0", "0", "0", "0", "0"];
var gameBoard = [];
var winningIndexPositions = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];

var adjectives = ['Sweet move for ', 'Nice reply by ', 'Snap! With an ', 'Plays ', 'Lays down an ', 'Players gonna play an ', 'xoxOXoXOOXooo it\'s an... '];

$( document ).ready(function() {
  console.log( "ready!" );
  $('body').css('background-image', 'url(images/grey_tile.png)');

    soundManager.setup({
    url: 'swf/',
    flashVersion: 9,
    preferFlash: false,
    onready: function() {
    }
  });
      $('.box').on("click", function(){
      var mySound = soundManager.createSound({
      url: 'audio/tommib_cutA.mp3'
          });
      mySound.play()
       })
   
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
    $(".box").on("click", function(e) {
      if (moves % 2 === 0) {
        // console.log("move is even");
        // debugger
        // $('.box').text('X');
        this.childNodes[3].innerText = "X"
        var id = Number(this.id);
        gameBoard[id] = "X";
        
        var output = this.childNodes[3].innerText = "X"; 
        var randomAdjective = adjectives[Math.floor(adjectives.length * Math.random())];
        $('ul').append('<li>' + randomAdjective + " " + output + '</li>');
        // playerXArray[id] = "X";
        // gameBoard.push("x");
      } else {
        // console.log("move is odd");
        // $('.box').text('O')
        this.childNodes[3].innerText = "O"
        var id = Number(this.id);
        gameBoard[id] = "O";
        // playerOArray[id] = "O";
        // console.log(playerOArray);
        var output = this.childNodes[3].innerText = "O"; 
        var randomAdjective = adjectives[Math.floor(adjectives.length * Math.random())];
        $('ul').append('<li>' + randomAdjective + " " + output + '</li>');
      }
      
      // Decide who wins
      // console.log($.inArray(index, gameBoard[0]));
      
       $.each(winningIndexPositions, function(index, winningCombo) {
          // console.log(winningIndexPositions);
          
           if((gameBoard[winningCombo[0]] ==="X") && (gameBoard[winningCombo[1]] === "X") && (gameBoard[winningCombo[2]] === "X")) {
              console.log("X winner");
              $('#winner-text').text("x wins!");
            } else if 
             ((gameBoard[winningCombo[0]] ==="O") && (gameBoard[winningCombo[1]] === "O") && (gameBoard[winningCombo[2]] === "O")) {
              console.log("O winner");
              $('#winner-text').text("o wins!");
            } else if (moves === 8) {
              $('#winner-text').text("tis a tie!");
              };
          }) 
            console.log(moves);
            moves = moves + 1;
            
            // $("#reset_board").on("click", function() {
            //   window.location.reload();
          }); 
      // });

});