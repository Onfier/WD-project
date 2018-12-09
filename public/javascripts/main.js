var board = new board();
var player1 = new player(true);
var player2 = new player(false);

function diceroll(){
  var rolls = [];
  rolls[0] = Math.floor(Math.random * 6 + 1);
  rolls[1] = Math.floor(Math.random * 6 + 1);
  return rolls;
}

function playturn(player){
  var rolls = diceroll();
  for(i = 0; i < 2; i++){}
    if (player.checkersOnBar > 0){
      var validmoves = movesFromBar(player, rolls);
      if (validmoves.length == 0){
        //use novalidmoves function #UI
      }
      //prompt for move #UI
      if(validmoves.indexOf(move != -1)){
        move.execute();
      }

    }
  }
}

function movesFromBar(player, rolls){
  var opponentPositions;
  if(player.isWhite){
    opponentPositions = board.blackpostions;
  }
  else{
    for (i in board.whitepostions){
      opponentPositions.push(25 - i);
    }
  }
  var moves = [];
  for(i in rolls){
    var newpos = 25 - i;
    if(opponentPositions.indexOf(newpos) == opponentPositions.lastindexOf(newpos)){
      moves.push(new Move(25, newpos));
    }
  }
  return moves;
}
