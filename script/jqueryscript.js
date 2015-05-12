$( document ).ready(function() {
    console.log( "ready!" );

var gameBoard = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

// var winCombos = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2] ];

$( "#1" ).click(function() {
  $(this).html("<div>X</div>");
});

$( "#2" ).click(function() {
  $(this).html("<div>O</div>");
});

console.log( $( ".box" ).get( 0 ) );

    // $( "#1" ).toggle(function() {
    //   alert( "First handler for .toggle() called." );
    // }, function() {
    //   alert( "Second handler for .toggle() called." );
    // });


});